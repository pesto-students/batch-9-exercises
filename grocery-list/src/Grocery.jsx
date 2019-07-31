import React from 'react';
import GroceryList from './GroceryList';

class Grocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: '',
    }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="grocery-item">
            Add grocery item
          </label>
          <input
            id="grocery-item"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add
          </button>
        </form>
        <GroceryList items={this.state.items} />
      </div>
    );
  }
}

export default Grocery;
