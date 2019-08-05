import React from 'react';
import GroceryListItem from './GroceryListItem';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
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
    this.setState({
      groceries: [...this.state.groceries, { name: this.state.inputValue }],
      inputValue: ''
    });
  }

  clearList() {
    this.setState({
      groceries: []
    });
  }
  render() {
    const { groceries } = this.state;

    const groceriesComponents = groceries.map((
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

export default GroceryList;
