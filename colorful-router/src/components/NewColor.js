import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { paths } from '../routes';
import '../styles/NewColor.css';

class NewColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hex: '#ffffff',
      onBeforeLeavingMessage: 'Are you sure you want to leave this page?',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onUnload = this.onUnload.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onUnload);
  }


  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onUnload);
  }

  onUnload(event) {
    event.preventDefault();
    const { onBeforeLeavingMessage, name, hex } = this.state;
    if (name || hex !== '#ffffff') {
      event.returnValue = onBeforeLeavingMessage;
    }
    // return event;
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addColor({ ...this.state });
    this.props.history.push(paths.color);
  }


  render() {
    return (
      <div className="new-color">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Color name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter a name for the color"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="hex">Color value</label>
            <input
              type="color"
              name="hex"
              id="hex"
              onChange={this.handleChange}
              value={this.state.hex}
            />
          </div>
          <input type="Submit" value="Add this color" readOnly />
        </form>
      </div>
    );
  }
}

NewColor.propTypes = {
  addColor: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default NewColor;
