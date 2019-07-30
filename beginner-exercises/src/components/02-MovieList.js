import React, { Component } from 'react';

const MovieName = ({ name }) => <li>{name}</li>;


class MovieList extends Component {
  // We can put DOM elements delivered by React just like HTML elements.
  // Doesn't this code look familiar to you?
  // Refer to App.css for a list a classes or add one yourself
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
