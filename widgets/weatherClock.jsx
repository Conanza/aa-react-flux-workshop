const React = require('react');
const API_KEY = require('./apiKey');
const API_PATH = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&APPID={APIKEY}'
const $ = require('jquery');

var WeatherClock = React.createClass({
  render: function () {
    return (
      <div>
        <Clock />
        <Weather />
      </div>
    );
  }
});

var Clock = React.createClass({
  getInitialState: function () {
    return { time: new Date() }
  },
  componentDidMount: function () {
    this.ticker = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function () {
    clearInterval(this.ticker);
  },
  render: function () {
    return (<div>TIME: {this.state.time.toLocaleTimeString()}</div>);
  },
  tick: function () {
    this.setState({ time: new Date() });
  }
});

var Weather = React.createClass({
  getInitialState: function () {
    return { weather: 'weather outside is weather', temperature: 'weather' };
  },
  getAndSetWeather: function () {
    console.log('checking weather');
    navigator.geolocation.getCurrentPosition(geoLocation => {
      var reqPath = API_PATH
                      .replace(/{lat}/, geoLocation.coords.latitude)
                      .replace(/{lon}/, geoLocation.coords.longitude)
                      .replace(/{APIKEY}/, API_KEY);

      $.ajax({
        type: 'GET',
        url: 'http://' + reqPath,
        success: resp => {
          this.setState({
            weather: resp.weather[0].description,
            temperature: ((resp.main.temp * 9) / 5 - 459.67).toFixed(2)
          });
        }
      });
    });

  },
  componentWillMount: function () {
    this.weatherChecker = setInterval(this.getAndSetWeather, 5000);
  },
  componentWillUnmount: function () {
    clearInterval(this.weatherChecker);
  },
  render: function () {
    return (
      <div>
        <p>Weather: {this.state.weather}</p>
        <p>Temperature: {this.state.temperature}</p>
      </div>
    );
  }
});

module.exports = WeatherClock;
