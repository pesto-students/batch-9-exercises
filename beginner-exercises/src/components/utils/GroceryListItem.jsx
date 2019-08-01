
import React from 'react';
import PropTypes from 'prop-types';

class GroceryListItem extends React.PureComponent {
  render() {
    const {
      groceryName, groceryId, isSelected, toggleSelect,
    } = this.props;
    const applyStyle = isSelected ? { color: 'red' } : {};
    return <li onClick={() => { toggleSelect(groceryId); }} style={applyStyle}>{groceryName}</li>;
  }
}

GroceryListItem.propTypes = {
  groceryName: PropTypes.string.isRequired,
  groceryId: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};

export default GroceryListItem;
