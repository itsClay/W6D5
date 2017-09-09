import React from 'react';


export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clock: new Date()};
  }

  render() {
    return(
      <div className="clock-container">
        <h1>2 Clock</h1>
        <p id="clock-time">{this.state.clock.toLocaleTimeString()}</p>
        <p>{this.state.clock.toDateString()}</p>
      </div>
    );
  }

  tick() {
    this.setState({clock: new Date()});
  }

  componentDidMount() {
    console.log(this);
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

}
