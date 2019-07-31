/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/require-default-props */
/*
  Q1:

  Implement a radio group form control with the API found in <CompoundComponents> (Line 69).

  - Implement an `onChange` prop that communicates the <RadioGroup>'s state
    back to the parent so it can use it to render
  - Implement keyboard controls on the <RadioGroup>
    - Enter and space bar should select the option
    - Arrow right, arrow down should select the next option
    - Arrow left, arrow up should select the previous option
*/

import React from 'react';
import PropTypes from 'prop-types';

class RadioGroup extends React.Component {
  static get propTypes() {
    return {
      defaultValue: PropTypes.string,
      children: PropTypes.shape().isRequired,
    };
  }

  render() {
    const { children, defaultValue } = this.props;
    return (
      <div>
        {React.Children.map(children, child => React.cloneElement(child, { defaultValue }))}
      </div>
    );
  }
}

class RadioOption extends React.Component {
  static get propTypes() {
    return {
      value: PropTypes.string,
      defaultValue: PropTypes.string,
      children: PropTypes.shape().isRequired,
    };
  }

  render() {
    const { defaultValue, value, children } = this.props;
    return (
      <div tabIndex="0" role="tab" aria-selected="true">
        <RadioIcon isSelected={value === defaultValue} />
        {' '}
        {children}
      </div>
    );
  }
}

class RadioIcon extends React.Component {
  static get propTypes() {
    return {
      isSelected: PropTypes.bool.isRequired,
    };
  }

  render() {
    const { isSelected } = this.props;
    return (
      <div
        style={{
          borderColor: '#ccc',
          borderWidth: 3,
          borderStyle: isSelected ? 'inset' : 'outset',
          height: 16,
          width: 16,
          display: 'inline-block',
          cursor: 'pointer',
          background: isSelected ? 'rgba(0, 0, 0, 0.05)' : '',
        }}
      />
    );
  }
}

class CompoundComponents extends React.Component {
  render() {
    return (
      <div>
        <h1>♬ It is about time that we all turned off the radio ♫</h1>

        <RadioGroup defaultValue="fm">
          <RadioOption value="am">AM</RadioOption>
          <RadioOption value="fm">FM</RadioOption>
          <RadioOption value="tape">Tape</RadioOption>
          <RadioOption value="aux">Aux</RadioOption>
        </RadioGroup>
      </div>
    );
  }
}

export default CompoundComponents;
