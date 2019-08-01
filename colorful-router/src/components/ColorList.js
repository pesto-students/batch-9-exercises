import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import '../styles/ColorList.css';

const ColorList = props => {
  const colorLinks = props.colors.map(color => (
    <Link to={'/color/' + color.name}>
      <li key={color.hex}>{color.name}</li>
    </Link>
  ));
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Welcome to the Colorful Router.</h1>
        <h1>
          {' '}
          <Link to='/color/new'>Add a color</Link>
        </h1>
      </header>
      <div className='App-intro'>
        <p>Please select a color.</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
};

ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired
};

export default ColorList;
