import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MovieName = ({ name }) => <li>{name}</li>;
MovieName.propTypes = {
  name: PropTypes.string.isRequired,
};

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: ['The Godfather', 'Chachi 420', 'The Dark Knight Rises'],
    };
  }

  render() {
    const { movies } = this.state;
    const movieList = movies.map(movie => <MovieName key={movie} name={movie} />);

    return (
      <ul className="movie-list">
        {movieList}
      </ul>
    );
  }
}

export default MovieList;
