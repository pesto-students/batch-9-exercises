/* eslint-disable react/jsx-filename-extension */
import React, { PureComponent } from 'react';

class MovieList extends PureComponent {
  render() {
    return (
      <ul className="movie-list">
        <li>The Godfather</li>
        <li>The Prestige</li>
      </ul>
    );
  }
}

export default MovieList;
