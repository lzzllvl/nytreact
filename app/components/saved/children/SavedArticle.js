const React = require('react');

var SavedArticle = React.createClass({

  render: function() {
    <li>
      {this.props.article.title}
    </li>
  }
});

module.exports = SavedArticle;