/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';

/*
* Exercise 2:
*
*  Create a `StopWatch` component that has a Start/Stop button and a Clear
*  button.
*
*  Pressing Start will start a timer and the lapsed time in
*  milliseconds should be displayed above the buttons.
*
*  Once started the Start button should change to Stop. Clicking Stop
*  will stop the timer but lapsed time will be preserved.
*
*  Clicking Start again will resume the timer from where it left off.
*
*  Clicking Clear will stop the timer if it's running and reset the lapsed time to 0.
*/

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
