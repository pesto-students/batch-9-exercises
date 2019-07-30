import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '' };
    this.onMovieChange = this.onMovieChange.bind(this);
  }

  onMovieChange(event) {
    const movie = event.target.value;
    this.setState({ movie });
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        {
            movie === ''
            ? <p>Hey there. Enter your favorite movie.</p>
          : (<p>My favorite movie is <span style={{ color: 'blue' }}>{this.state.movie}</span></p>)
        }
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}

export default FavoriteMovie;
