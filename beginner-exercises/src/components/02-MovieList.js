/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    return (
      <ul className="movies-list">
        <li>The Godfather</li>
        <li>Iron Man</li>
      </ul>
    );
  }
}

export default MovieList;
