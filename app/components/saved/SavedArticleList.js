const React = require('react');

const SavedArticle = require('./children/SavedArticle');

module.exports = React.createClass({

  render: function() {
    let articles = this.props.resultArray.map(function(value) {
      return <SaveArticle article={value}/>;
    });
    return <section>{articles}</section>;
  }
});