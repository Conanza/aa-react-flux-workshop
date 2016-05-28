var React = require('react');

var Tabs = React.createClass({
  getInitialState: function () {
    return { selectedTab: undefined };
  },
  clicked: function (idx) {
    this.setState({ selectedTab: idx });
  },
  render: function () {
    var tabs = this.props.items.map((item, i) => {
      var selected = false;
      if (this.state.selectedTab === i) { selected = true; }

      return (<Header
        title={item.title}
        clickHandler={this.clicked.bind(this, i)}
        selected={selected}
      />);
    });
    var article = this.state.selectedTab !== undefined ?
                  this.props.items[this.state.selectedTab].content :
                  '<Select an article>';

    return (
      <div>
        <ul>{tabs}</ul>
        <article>{article}</article>
      </div>
    );
  }
});

var Header = React.createClass({
  render: function () {
    if (this.props.selected) {
      return (<h1 onClick={this.props.clickHandler}>{this.props.title}</h1>);
    } else {
      return (<h3 onClick={this.props.clickHandler}>{this.props.title}</h3>);
    }
  }
});

module.exports = Tabs;
