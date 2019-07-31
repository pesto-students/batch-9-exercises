import React from 'react';
import PropTypes from 'prop-types';

const InputComponent = ({
  labelName,
  onChangeFunc,
  errorMsg,
  ...props

}) => {
  const defaultErrorStyle = { color: 'red' };
  return (<div>
    <label htmlFor={labelName} >{labelName}</label>
    <input
      onChange={onChangeFunc}
      {...props}
    />
    {errorMsg && <p style={defaultErrorStyle}> errorMsg </p>}
  </div>);
};

InputComponent.propTypes = {
  labelName: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
};

InputComponent.defaultProps = {
  errorMsg: null,
};
export default InputComponent;
