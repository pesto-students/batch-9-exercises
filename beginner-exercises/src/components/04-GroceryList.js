import React from 'react';
import ButtonComponent from './utils/ButtonComponent';
import GroceryAddComponent from './utils/GroceryAddComponent';
import GroceryListItem from './utils/GroceryListItem';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        { name: 'Apples', id: 1, selected: false },
        { name: 'KitKat', id: 2, selected: false },
        { name: 'Red Bull', id: 3, selected: false }],
    };
    this.addGrocery = this.addGrocery.bind(this);
    this.clearGroceryList = this.clearGroceryList.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  addGrocery(grocery) {
    const { groceries } = this.state;
    const nextGroceryId = groceries.length + 1;
    groceries.push({ name: grocery, id: nextGroceryId, selected: false });
    this.setState({ groceries });
  }

  clearGroceryList() {
    this.setState({ groceries: [] });
  }

  toggleSelect(groceryId) {
    const { groceries } = this.state;
    const indexOfGroceryId = groceries.findIndex(grocery => grocery.id === groceryId);
    groceries[indexOfGroceryId].selected = !groceries[indexOfGroceryId].selected;
    this.setState({ groceries });
  }

  render() {
    const { groceries } = this.state;
    const groceriesComponents = groceries.map(item => (
      <GroceryListItem
        groceryName={item.name}
        groceryId={item.id}
        isSelected={item.selected}
        key={item.id}
        toggleSelect={this.toggleSelect}
      />
    ));
    // Hint: Don't forget about putting items into `ul`
    return (
      <div>
        <ul>{groceriesComponents}</ul>
        <GroceryAddComponent addGroceryFunction={this.addGrocery} />
        <ButtonComponent name="Clear List" clickFunc={this.clearGroceryList} />
      </div>
    );
  }
}
export default GroceryList;
