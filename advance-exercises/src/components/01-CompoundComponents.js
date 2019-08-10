
import React from 'react';
import PropTypes from 'prop-types';

class RadioGroup extends React.Component {
  state = {selectedValue:this.props.defaultValue || null}
  changeSelectedOption = this.changeSelectedOption.bind(this)
  static propTypes = {
    defaultValue: PropTypes.string,
    children: PropTypes.array.isRequired,
  };

  changeSelectedOption(value){
    this.setState({selectedValue:value})
  }

  handleOnKeyDown(event) {
    event.stopPropagation();
    let optionElementToSelect;
    console.log(`The key pressed is `,event.key)
    switch (event.key) {
      case ' ': optionElementToSelect = event.target;
        break;
      case 'Enter': optionElementToSelect = event.target;
        break;
      case 'ArrowUp' || 'ArrowLeft': optionElementToSelect = event.target.previousSibling;
        if (optionElementToSelect === null) {
          optionElementToSelect = event.currentTarget.lastChild;
        }
        break;
      case 'ArrowDown' || 'ArrowRight': optionElementToSelect = event.target.nextSibling;
        if (optionElementToSelect === null) {
          optionElementToSelect = event.currentTarget.firstChild;
        }
        break;

      default: break;
    }
    if (optionElementToSelect) {
      optionElementToSelect.focus();
      optionElementToSelect.click();
    }
  }

  render() {
    const { name } = this.props;
    const { selectedValue } = this.state;
    const renderedChildren = React.Children.map(this.props.children, (child) => {
      const { value } = child.props;
      return React.cloneElement(child,{name, selectFunction:this.changeSelectedOption, isSelected: value === selectedValue})
    })
    return (
      <div onKeyDown={this.handleOnKeyDown}>{renderedChildren}</div>
    );
  }
}
const RadioOptionContext = React.createContext();

class RadioOption extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,                       
    children: PropTypes.array.isRequired,
    isSelected:PropTypes.bool,
  };

  static RadioIcon2 = () => {
return (
  <RadioOptionContext.Consumer  >
    {({isSelected, name}) => {
      return (<RadioIcon isSelected={isSelected} name={name} />)
      }} 
  </RadioOptionContext.Consumer>

 )
  }
  
  render() {
    const { name, value, isSelected, selectFunction } = this.props;
    return (
      <div onClick={()=>{selectFunction(value)}} tabIndex='0'>
       <RadioOptionContext.Provider value={{isSelected, name}} >
          {this.props.children}
       </RadioOptionContext.Provider>
      </div>
    );
  }
}

class RadioIcon extends React.Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div
        name={this.props.name}
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
          <RadioOption value="tape">Tape <RadioOption.RadioIcon2/></RadioOption>
          <RadioOption value="aux"><RadioOption.RadioIcon2/>Aux</RadioOption>
        </RadioGroup>
      </div>
    );
  }
}

export default CompoundComponents;
