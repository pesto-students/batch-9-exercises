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
  constructor() {
    super();
    this.state = {
      timePassed: 0,
      nextTimerState: 'Start',
      intervalId: null,
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  startTimer() {
    const startInterval = setInterval(() => {
      const { timePassed } = this.state;
      this.setState({ timePassed: timePassed + 1 });
    }, 1);
    this.setState({ intervalId: startInterval, nextTimerState: 'Stop' });
  }

  stopTimer() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
    this.setState({ intervalId: null, nextTimerState: 'Start' });
  }

  clearTimer() {
    this.stopTimer();
    this.setState({ timePassed: 0 });
  }

  toggleTimer() {
    const { nextTimerState } = this.state;
    if (nextTimerState === 'Start') {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  render() {
    const { timePassed, nextTimerState } = this.state;
    return (
      <div>
        <div><h1>Stop Watch</h1></div>
        <h3>
          Time Lapsed:
          {timePassed}
        </h3>
        <button type="button" onClick={this.toggleTimer}>
          {nextTimerState}
        </button>
        <button type="button" onClick={this.clearTimer}> Clear </button>
      </div>

    );
  }
}

export default StopWatch;
