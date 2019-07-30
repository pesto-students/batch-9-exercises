/* eslint-disable react/prop-types */
import React from 'react';

/*
  In this exercises, you'll will make a reactive grocery list.

  Task 3: Create a button to clear the whole list.

  Task 4: Clicking on a grocery item should change its color to red. Clicking again should change
          it back to black. Red means the item has been purchased.

*/

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.setState({ groceries: [...this.state.groceries, { name: item }] });
  }

  render() {
    const { groceries } = this.state;
    const groceriesComponents = groceries.map(item => ( // eslint-disable-line no-unused-vars
      <GroceryListItem key={item} grocery={item} />
    ));
    // Hint: Don't forget about putting items into `ul`
    return (
      <React.Fragment>
        <ul>
          {groceriesComponents}
        </ul>
        <GroceryInput addItem={this.addItem} />
      </React.Fragment>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
class GroceryInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
    };
    this.onGroceryChange = this.onGroceryChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onGroceryChange(event) {
    this.setState({ item: event.target.value });
  }

  onSubmit() {
    const { item } = this.state;
    this.setState({ item: '' }, () => {
      this.props.addItem(item);
    });
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" name="grocery" value={this.state.item} onChange={this.onGroceryChange} />
        <button onClick={this.onSubmit}>Add</button>
      </React.Fragment>
    );
  }
}

/* eslint-disable react/no-multi-comp, no-useless-constructor */
class GroceryListItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <li>
        {this.props.grocery.name}
      </li>
    );
  }
}

// Do prop validation here using the package `prop-types`

export default GroceryList;
