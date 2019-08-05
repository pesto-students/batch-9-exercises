/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';

class StopWatch extends Component {
  render() {
    return (
      <div>
        <p>Stop Watch</p>
        <StopWatchComp />
      </div>
    );
  }
}

class StopWatchComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      runningTime: 0,
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleClick() {
    this.setState(({ status, runningTime }) => {
      if (status) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - runningTime;
        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime });
        });
      }
      return { status: !status };
    });
  }

  handleClear() {
    clearInterval(this.timer);
    this.setState({ runningTime: 0, status: false });
  }

  render() {
    const { status, runningTime } = this.state;
    return (
      <div>
        <p>{runningTime} ms</p>
        <button type="button" onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
        <button type="button" onClick={this.handleClear}>clear</button>
      </div>
    );
  }
}

export default StopWatch;
