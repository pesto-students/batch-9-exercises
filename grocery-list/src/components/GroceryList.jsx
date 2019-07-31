/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
    };
    this.addItem = this.addItem.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  onClear() {
    this.setState({ groceries: [] });
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
        <ClearButton onClear={this.onClear} />
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

const ClearButton = props => (<button onClick={props.onClear}>Clear</button>);

/* eslint-disable react/no-multi-comp, no-useless-constructor */
class GroceryListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      purchased: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ purchased: !this.state.purchased });
  }

  render() {
    const { purchased } = this.state;
    return (
      <li onClick={this.onClick} style={{ color: purchased ? 'red' : 'black', cursor: 'pointer' }}>
        {this.props.grocery.name}
      </li>
    );
  }
}

// Do prop validation here using the package `prop-types`

export default GroceryList;
