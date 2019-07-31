import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.START = 'start';
    this.STOP = 'stop';
    this.state = {
      time: 0,
      intervalInstance: null,
      buttonState: this.STOP,
    };
    this.changeTime = this.changeTime.bind(this);
    this.clearTime = this.clearTime.bind(this);
  }

  changeTime() {
    if (this.state.buttonState === this.START) {
      clearInterval(this.state.intervalInstance);
      this.setState({ intervalInstance: null, buttonState: this.STOP });
    } else {
      const intervalInstance = setInterval(() => {
        const { time: newTime } = this.state;
        this.setState({ time: newTime + 1000 });
      }, 1000);
      this.setState({ intervalInstance: intervalInstance, buttonState: this.START });
    }
  }

  clearTime() {
    clearInterval(this.state.intervalInstance);
    this.setState({ time: 0, buttonState: this.STOP, intervalInstance: null });
  }

  render() {
    const { buttonState, time } = this.state;
    return (
      <div>
        <h2>Stop Watch</h2>
        <p>{time}</p>
        <div>
          <Button className={buttonState === this.START ? 'stop-btn' : 'start-btn'}
            onClick={this.changeTime} name="start" text={buttonState === this.START ? this.STOP : this.START} />
          <Button className="clear-btn" name="clear" onClick={this.clearTime} text="clear" />
        </div>
      </div >
    );
  }
}

function Button({ className, onClick, text }) {
  return <button className={className} onClick={onClick}>{text}</button>;
}

export default StopWatch;
