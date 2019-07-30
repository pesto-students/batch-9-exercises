import React from 'react';

/*
  

  Task 4: Clicking on a grocery item should change its color to red. Clicking again should change
          it back to black. Red means the item has been purchased.

*/

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

// Render grocery name from component's properties.
// If you have a problem, check `this.props` in the console.
/* eslint-disable react/no-multi-comp, no-useless-constructor */

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liColor: 'black' };
    this.itemClick = this.itemClick.bind(this);
  }
  itemClick(event) {
    this.state.liColor === 'black'
      ? this.setState({ liColor: 'red' })
      : this.setState({ liColor: 'black' });
  }

  render() {
    return (
      <li style={{ color: this.state.liColor }} onClick={this.itemClick}>
        {this.props.grocery.name}
      </li>
    );
  }
}

// Do prop validation here using the package `prop-types`

export default GroceryList;
