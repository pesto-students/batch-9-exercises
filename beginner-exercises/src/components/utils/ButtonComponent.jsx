import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = ({
  name,
  clickFunc,
}) => {
  return (
    <div>
      <button
        onClick={clickFunc}
      >
        <span>{name}</span>
      </button>
    </div>
  );
};

ButtonComponent.propTypes = {
  name: PropTypes.string.isRequired,
  clickFunc: PropTypes.func.isRequired,
};

export default ButtonComponent;
