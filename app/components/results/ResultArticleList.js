const React = require('react');

const ResultArticle = require('./children/ResultArticle');

module.exports = React.createClass({
  
  render: function() {
    let articles = this.props.resultArray.map(function(value) {
      return <ResultArticle article={value}/>;
    });
    return <section>{articles}</section>;
  }
});