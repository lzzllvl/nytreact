const React = require('react');

const ResultArticle = require('./children/ResultArticle');

class ResultArticleList extends React.Component {

  render() {
    let articles = this.props.resultArray.map((value, i) => {
      return <ResultArticle
                key={i}
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
};

module.exports = ResultArticleList;