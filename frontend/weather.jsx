import React from 'react';
import APIKEY from '../keystore';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {weather: "", temp: "", descr: "", icon: ""};
    this.curPos = {
      coord: {
        lat: '',
        lon: '',
      }
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.setCurPos.bind(this));
    // this.fetchWeather();
  }

  fetchWeather() {
    let req = new XMLHttpRequest();
    req.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${this.curPos.coord.lat}&lon=${this.curPos.coord.lon}&APPID=${APIKEY}`, true);

    req.onload = () => {
      if (req.status >= 200 && req.status < 400) {
        let resp = JSON.parse(req.responseText);
        console.log(resp);
        this.setState({weather: resp, temp: resp.main.temp, descr: resp.weather[0].description, icon: resp.weather[0].icon});
      } else {
        let resp = req.responseText;
        console.log(resp);
      }
    };

    req.send();
  }

  setCurPos(response) {
    this.curPos = {coord:
                    { lat: response['coords']['latitude'],
                      lon: response['coords']['longitude']}
                    };
    console.log(this.curPos.coord.lat);
    console.log(this.curPos.coord.lon);
    console.log(APIKEY);
    console.log(this.iconUrl());
  }

  convertTemp() {
    return parseInt(this.state.temp) * 9/5 - 459.67;
    // convertTemp.bind(this)
  }
//  + `${this.state.weather.weather.icon}` + "
  iconUrl() {
    if (this.state.icon === "") {
      return  "";
    }
    const url = `http://www.openweathermap.org/img/w/${this.state.icon}.png`;
    return (<img src={url}></img>);
    // iconUrl.bind(this)
  }

  render() {
    // console.log('*************************');
    // console.log(this.state);
    const st = this.state;
    return(
      <div className="weather-container">
        <ul>
          <li>Temperature: {this.convertTemp()}</li>
          <li>Description: {st.descr}</li>
          <li>Icon: {this.iconUrl()}</li>
        </ul>
        <button onClick={this.fetchWeather.bind(this)}>Fetch dat weather doe</button>
      </div>
    );
  }

}
