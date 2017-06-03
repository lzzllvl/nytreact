const React = require('react');

const ResultArticle = require('./children/ResultArticle');

var ResultArticleList = React.createClass({

  render: function() {
    let articles = this.props.resultArray.map((value) => {
      return <ResultArticle
                article={value}
                saveArticle={this.props.saveArticle}/>;
    });
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
          <ul>{articles}</ul>
        </div>
      </div>
    );
  }
});

module.exports = ResultArticleList;