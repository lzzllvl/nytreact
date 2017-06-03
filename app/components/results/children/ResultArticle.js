const React = require('react');

var ResultArticle = React.createClass({
  //NEEDS A FUNCTION TO SAVE EACH article
  onClick: function() {
    this.props.saveArticle(this.props.article);
  },

  render: function() {
    return (
      <li className="articles">
        <h5 className="inline"><a href={this.props.article.url}>{this.props.article.title}</a></h5>
        <span>
          <button className="btn right inline" onClick={this.onClick}>Save</button>
        </span>
      </li>
    )
  }
});

module.exports = ResultArticle;