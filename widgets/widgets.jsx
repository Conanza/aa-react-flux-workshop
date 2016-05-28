const React = require('react');
const ReactDOM = require('react-dom');
const Tabs = require('./tabs');
const WeatherClock = require('./weatherClock');

var myTabs = [
  { title: 'hello', content: 'world'},
  { title: 'winwinwin', content: 'no matter what' },
  { title: 'going up', content: 'on a tuesday'}
];

var Widgets = React.createClass({
  render: function () {
    return (
      <div>
        <Tabs items={myTabs} />
        <WeatherClock />
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
