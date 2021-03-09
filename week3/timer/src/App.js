import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateState } from './redux/actions';

const styles = {
  timer: {
    textAlign: 'center',
    fontSize: '50px',
  }
}

class App extends Component {
  constructor() {
    super();
    this.timeBegan = null
    this.timeStopped = null
    this.stoppedDuration = 0
    this.started = null;
  }
  componentWillUnmount() {
    this.handleStop();
  }
  
  startTimer = () => {
    const currentTime = new Date();
    const timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration)
    const hour = timeElapsed.getUTCHours()
    const min = timeElapsed.getUTCMinutes()
    const sec = timeElapsed.getUTCSeconds()
    const ms = timeElapsed.getUTCMilliseconds();
    const hours = hour > 9 ? `${hour}:` : (hour === 0) ? '' : `0${hour}:`;
    const mins = min > 9 ? min : `0${min}`;
    const secs = sec > 9 ? sec : `0${sec}`;
    const mss = ms > 99 ? ms : ms > 9 ? `0${ms}` : `00${ms}`;
    const timer = `${hours}${mins}:${secs}.${mss}`;
    this.props.updateState({ key: 'timer', value: timer });
  }

  handleStart = () => {
    if (this.timeBegan === null) {
      this.timeBegan = new Date();
    }
    if (this.timeStopped !== null) {
      this.stoppedDuration += (new Date() - this.timeStopped);
    }
    this.started = setInterval(this.startTimer, 10);
  }

  handleStop = () => {
    this.timeStopped = new Date();
    clearInterval(this.started);
  }

  handleReset = () => {
    clearInterval(this.started);
    this.stoppedDuration = 0;
    this.timeBegan = null;
    this.timeStopped = null;
    this.props.updateState({ key: 'timer', value: "00:00.000" });
  }

  handleLap = () => {
    const { updateState, laps, timer } = this.props;
    updateState({ key: 'laps', value: [...laps, timer] });
    this.handleReset();
    this.handleStart();
  }

  render() {
    return (
      <div>
        <br />
        <div>
          <button onClick={this.handleStart}>Start</button>
          <button onClick={this.handleStop}>Stop</button>
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleLap}>Lap</button>
        </div>
        <h1 style={styles.timer}>
          {this.props.timer}
        </h1>
        <br />
        {this.props.laps.map((val, i) => <h2 key={i}>Lap {i + 1}: {val}</h2>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timer: state.timer,
  laps: state.laps,
});

const mapDispatchToProps = dispatch => ({
  updateState: change => dispatch(updateState(change)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
