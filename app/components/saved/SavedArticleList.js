const React = require('react');

const SavedArticle = require('./children/SavedArticle');

var SavedArticleList = React.createClass({

  render: function() {
    let articles = this.props.savedArray.map(function(value) {
      return <SavedArticle article={value}/>;
    });
    return <section>{articles}</section>;
  }
});

module.exports = SavedArticleList;