/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-expressions */
import React from 'react';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
      inputValue: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  onInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  onAddButtonClick() {
    const { groceries, inputValue } = this.state;
    this.setState({
      groceries: [...groceries, { name: inputValue }],
      inputValue: '',
    });
  }

  clearList() {
    this.setState({
      groceries: [],
    });
  }

  render() {
    const { groceries, inputValue } = this.state;
    const groceriesComponents = groceries.map(item => <GroceryListItem grocery={item} />);
    return (
      <div>
        <ul>{groceriesComponents}</ul>
        <input
          name="addInput"
          onChange={this.onInputChange}
          value={inputValue}
        />
        <button name="addButton" type="button" onClick={() => this.onAddButtonClick()}>
          {' '}
          Add Grocery
          {' '}
        </button>
        <div>
          <button name="clearButton" type="button" onClick={this.clearList}>
            Clear list
          </button>
        </div>
      </div>
    );
  }
}

/* eslint-disable react/no-multi-comp, no-useless-constructor */

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liColor: 'black' };
    this.itemClick = this.onItemClick.bind(this);
  }

  onItemClick() {
    const { liColor } = this.state;
    liColor === 'black'
      ? this.setState({ liColor: 'red' })
      : this.setState({ liColor: 'black' });
  }

  render() {
    const { liColor } = this.state;
    const { grocery } = this.props;
    return (
      <li style={{ color: liColor }} onClick={this.onItemClick}>
        {grocery.name}
      </li>
    );
  }
}

export default GroceryList;
