/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '' };
    this.onMovieChange = this.onMovieChange.bind(this);
  }

  /* eslint-disable no-unused-vars, react/no-unused-state */
  onMovieChange(event) {
    this.setState({ movie: event.target.value });
  }

  render() {
    const { movie } = this.state;
    let movieText = (
      <p>
      My favorite movie is
        <span style={{ color: 'blue' }}>
          {movie}
        </span>
      </p>
    );
    if (movie.length === 0) {
      movieText = <p>Hey there. Enter your favorite movie.</p>;
    }
    return (
      <div>
        {movieText}
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}

export default FavoriteMovie;
