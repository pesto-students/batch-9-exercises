import React from 'react';

const FormGroup = ({ onChangeFunc, ...props }) => {
  const renderedElements = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, { onChangeFunc });
  });
  return (
    { renderedElements }
  );
};
export default FormGroup;
