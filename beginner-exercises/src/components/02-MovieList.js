import React, { Component } from 'react';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: ['The Godfather', 'The Godfather 2', 'The Godfather 3'],
    };
  }

  render() {
    const listData = this.state.movies.map((list, index) => <li key={index.toString()}>{list}</li>);
    return (
      <ul className="movies-list">
        {listData}
      </ul>
    );
  }
}

export default MovieList;
