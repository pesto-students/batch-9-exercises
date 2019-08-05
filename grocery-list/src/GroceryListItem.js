import React from 'react';
//
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

export default GroceryListItem;
