import React, { Component } from 'react';

class FavoriteMovie extends Component {

  constructor(props) {
    super(props);
    this.state = { movie: '' };
    this.onMovieChange = this.onMovieChange.bind(this);
  }
  onMovieChange(event) {
    const movieName = event.target.value;
    this.setState({ movie: movieName });
  }

  render() {
    let description;
    if (this.state.movie === '') {
      description = <p>Hey there. Enter our favourite movie. </p>;
    } else {
      description = <p>My favorite movie is <span style={{ color: 'blue' }}>{this.state.movie}</span></p>;
    }
    return (
      <div>
        {description}
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}

export default FavoriteMovie;
