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

const initialState = {
  running: false,
  timer: 0
};
class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.toggleRunningState = this.toggleRunningState.bind(this);
    this.update = this.update.bind(this);
    this.clear = this.clear.bind(this);
  }

  toggleRunningState() {
    this.setState({ running: !this.state.running }, () => {
      this.state.running ? this.startTimer() : clearInterval(this.timer);
    });
  }

  startTimer() {
    this.startTime = Date.now();
    this.timer = setInterval(this.update, 10);
  }
  update() {
    const delta = Date.now() - this.startTime;
    this.setState({ timer: this.state.timer + delta });
    this.startTime = Date.now();
  }
  clear() {
    clearInterval(this.timer);
    this.setState(initialState);
  }

  render() {
    return (
      <div>
        <h1> Stop watch</h1>
        <TimeElapsed timeElapsed={this.state.timer} />
        <button onClick={this.toggleRunningState}>
          {this.state.running ? 'Stop' : 'Start'}
        </button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

class TimeElapsed extends React.Component {
  getUnits() {
    const seconds = this.props.timeElapsed / 1000;
    return {
      min: Math.floor(seconds / 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
      msec: (seconds % 1).toFixed(3).substring(2)
    };
  }
  render() {
    const units = this.getUnits();
    return (
      <div id={this.props.id}>
        <span>{units.min}:</span>
        <span>{units.sec}:</span>
        <span>{units.msec}</span>
      </div>
    );
  }
}

export default StopWatch;
