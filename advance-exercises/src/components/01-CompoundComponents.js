/*
  Q1:

  Implement a radio group form control with the API found in <CompoundComponents> (Line 69).

  - Clicking a <RadioOption> should update the value of <RadioGroup>
  - The selected <RadioOption> should pass the correct value to its <RadioIcon>
  - The `defaultValue` should be set on first render.

  - Implement an `onChange` prop that communicates the <RadioGroup>'s state
    back to the parent so it can use it to render
  - Implement keyboard controls on the <RadioGroup>
    - Hint: Use tabIndex='0' on the <RadioOption>s so the keyboard will work
    - Enter and space bar should select the option
    - Arrow right, arrow down should select the next option
    - Arrow left, arrow up should select the previous option
*/

import React from 'react';
import PropTypes from 'prop-types';

class RadioGroup extends React.Component {
  state = {selectedValue:this.props.defaultValue || null}
  changeSelectedOption = this.changeSelectedOption.bind(this)
  static propTypes = {
    defaultValue: PropTypes.string,
    children: PropTypes.shape().isRequired,
  };
  changeSelectedOption(value){
    this.setState({selectedValue:value})
  }
  render() {
    const { name } = this.props;
    const { selectedValue } = this.state;
    const renderedChildren = React.Children.map(this.props.children, (child) => {
      const { value } = child.props;
      return React.cloneElement(child,{name, selectFunction:this.changeSelectedOption, isSelected: value === selectedValue})
    })
    return (
      <div tabIndex='0'>{renderedChildren}</div>
    );
  }
}
const RadioOptionContext = React.createContext();

class RadioOption extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,                       
    children: PropTypes.shape().isRequired,
    isSelected:PropTypes.bool.isRequired,
  };
  static RadioIcon2 = () => {
return (
  <RadioOptionContext.Consumer  >
    {({name, value, isSelected}) => {
      return (<RadioIcon isSelected={isSelected} name={name} value={value} />)
      }} 
  </RadioOptionContext.Consumer>

 )
  }
  render() {
    const { name, value, isSelected, selectFunction } = this.props;
    return (
      <div onClick={()=>{selectFunction(value)}}>
       <RadioOptionContext.Provider name={name} value={value} isSelected={isSelected}>
          {this.props.children}
       </RadioOptionContext.Provider>
      </div>
    );
  }
}

class RadioIcon extends React.Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div
        style={{
          borderColor: '#ccc',
          borderWidth: 3,
          borderStyle: this.props.isSelected ? 'inset' : 'outset',
          height: 16,
          width: 16,
          display: 'inline-block',
          cursor: 'pointer',
          background: this.props.isSelected ? 'rgba(0, 0, 0, 0.05)' : '',
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

        <RadioGroup defaultValue="fm" name="radio" >
          <RadioOption value="am">AM<RadioOption.RadioIcon2/></RadioOption>
          <RadioOption value="fm"><RadioOption.RadioIcon2/>FM</RadioOption>
          <RadioOption value="tape"><RadioOption.RadioIcon2/>Tape</RadioOption>
          <RadioOption value="aux"><RadioOption.RadioIcon2/>Aux</RadioOption>
        </RadioGroup>
      </div>
    );
  }
}

export default CompoundComponents;
