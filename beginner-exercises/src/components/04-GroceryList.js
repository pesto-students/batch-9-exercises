import React from 'react';

/*
  In this exercises, you'll will make a reactive grocery list.

  Task 1: Fill the `return` of `GroceryList` render method. It should return
        a list of `GroceryListItem`. You need to display the groceries names
        using `this.props` in `GroceryListItem`. We already prepared the variable
        `groceriesComponents` inside `render` method containing a list of these items for you.


  Task 2: Create an input box and a button. User should be able to add more grocery items and click
          the `Add` button to add it to the list displaying the item.

  Task 3: Create a button to clear the whole list.

  Task 4: Clicking on a grocery item should change its color to red. Clicking again should change
          it back to black. Red means the item has been purchased.

*/

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples', id: 1 }, { name: 'KitKat', id: 2 }, { name: 'Red Bull', id: 3 }],
      newGrocery: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleChange(event) {
    const newGrocery = event.target.value;
    this.setState({ newGrocery: newGrocery });
  }

  handleClick() {
    const newGrocery = this.state.newGrocery;
    const groceries = this.state.groceries;
    if (newGrocery === '') {
      return;
    }
    const newGroceryObject = { name: newGrocery, id: Math.random() }
    this.setState({ groceries: [...groceries, newGroceryObject], newGrocery: '' });
  }

  handleClearClick() {
    this.setState({ groceries: [], newGrocery: '' });
  }

  render() {
    const { groceries } = this.state;
    const groceriesComponents = groceries.map(item => ( // eslint-disable-line no-unused-vars
      <GroceryListItem grocery={item} key={item.id} />
    ));
    return (
      <div>
        <ul>
          {groceriesComponents}
        </ul>
        <input type="text" value={this.state.newGrocery} onChange={event => this.handleChange(event)} />
        <button onClick={this.handleClick} >Add</button>
        <button onClick={this.handleClearClick} >Clear</button>
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
  }

  render() {
    const { grocery } = this.props;
    return (
      <li>
        {grocery.name}
      </li>
    );
  }
}

// Do prop validation here using the package `prop-types`

export default GroceryList;
