const React = require('react');

module.exports = React.createClass({

  render: function() {
    <li>
      {this.props.article.title}
    </li>
  }
});