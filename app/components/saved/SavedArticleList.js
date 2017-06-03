const React = require('react');

const SavedArticle = require('./children/SavedArticle');

var SavedArticleList = React.createClass({

  render: function() {
    let articles = this.props.savedArray.map((value) => {
      return <SavedArticle
                article={value}
                deleteArticle={this.props.deleteArticle}/>;
    });
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">
          <ul>{articles}</ul>
        </div>
      </div>
    );
  }
});

module.exports = SavedArticleList;