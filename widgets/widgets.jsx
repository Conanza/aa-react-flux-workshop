var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');


var myTabs = [
  { title: 'hello', content: 'world'},
  { title: 'winwinwin', content: 'no matter what' },
  { title: 'going up', content: 'on a tuesday'}
];

var Widgets = React.createClass({
  render: function () {
    return (
      <Tabs items={myTabs} />
    );
  }
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Widgets/>, document.getElementById('main'))
});
