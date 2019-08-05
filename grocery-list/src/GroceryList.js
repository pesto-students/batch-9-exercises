import React from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import GroceryListItem from './GroceryListItem';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  onInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  onAddButtonClick() {
    const name = this.state.inputValue;
    this.props.addToList(name);
    this.setState({
      inputValue: ''
    });
  }

  clearList() {
    this.props.clearList();
  }
  render() {
    const groceriesComponents = this.props.groceries.map((
      item // eslint-disable-line no-unused-vars
    ) => <GroceryListItem grocery={item} />);
    return (
      <div>
        <ul>{groceriesComponents}</ul>
        <input
          name='addInput'
          onChange={this.onInputChange}
          value={this.state.inputValue}
        />
        <button name='addButton' onClick={() => this.onAddButtonClick()}>
          {' '}
          Add Grocery{' '}
        </button>
        <div>
          <button name='clearButton' onClick={this.clearList}>
            Clear list
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groceries: state.list
});

const mapDispatchToProps = dispatch => {
  return {
    addToList: name => dispatch(actions.addItem(name)),
    clearList: () => dispatch(actions.clearList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList);
