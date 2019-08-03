import React from 'react';
import PropTypes from 'prop-types';

const SharedTextBoxComponent = ({
  label,
  type,
  placeholder,
  attributeName,
  onChangeFunc,
  value,
}) => {
  const defaultLabelStyle = { fontSize: '18px'}
  return (
    <div>
      <label style={defaultLabelStyle} htmlFor={label} >{label}</label>
      <div >
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChangeFunc}
          name={attributeName}
        />
        <i className="icon icon-alert-2 right" />
      </div>
    </div>


  );
};

SharedTextBoxComponent.defaultProps = {
  onChangeFunc: null,
  value: null,
};

SharedTextBoxComponent.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  attributeName: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func,
  value: PropTypes.string,
};

export default SharedTextBoxComponent;
