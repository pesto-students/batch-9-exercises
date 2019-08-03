import React from 'react';
import PropTypes from 'prop-types';
import TextBoxComponent from './TextBoxComponent';
import ButtonComponent from './ButtonComponent';

class GroceryAddComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      grocery: { inputName: 'grocery-input', value: '' },
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.addGrocery = this.addGrocery.bind(this);
  }

  onChangeHandle({ target: { name, value } }) {
    const { grocery } = this.state;
    const isGroceryInputAndHaveValue = name === grocery.inputName;
    if (isGroceryInputAndHaveValue) {
      grocery.value = value;
      this.setState({ grocery });
    }
  }

  addGrocery() {
    const { grocery } = this.state;
    const { addGroceryFunction } = this.props;
    if (grocery.value.length > 0) {
      addGroceryFunction(grocery.value);
    } else {
      alert('Grocery name is empty');
    }
  }

  render() {
    const { grocery } = this.state;
    return (
      <div>
        <TextBoxComponent onChangeFunc={this.onChangeHandle} attributeName={grocery.inputName} label="Add Item Box" type="text" placeholder="Enter Grocery Item" />
        <ButtonComponent name="Add Item" clickFunc={this.addGrocery} />
      </div>
    );
  }
}

export default GroceryAddComponent;

GroceryAddComponent.propTypes = {
  addGroceryFunction: PropTypes.func.isRequired,
};
