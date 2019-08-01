import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/ColorList.css';
import { paths } from '../routes';

const ColorList = (props) => {
  const colorBasePath = paths.color;
  const colorLinks = props.colors.map((color) => {
    const colorPage = `${colorBasePath}/${color.name}`;
    return (
      <Link to={colorPage}>
        <li key={color.hex}>
          {color.name}
        </li>
      </Link>);
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to the Colorful Router.</h1>
        <Link to={paths.newColor} ><h1>Add a color</h1></Link>
      </header>
      <div className="App-intro">
        <p>Please select a color.</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
};

ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default ColorList;
