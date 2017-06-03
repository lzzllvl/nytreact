const React = require('react');

var ResultArticle = React.createClass({
  //NEEDS A FUNCTION TO SAVE EACH article

  render: function() {
    return (
      <li>
        {this.props.article.title}
      </li>
    )
  }
});

module.exports = ResultArticle;