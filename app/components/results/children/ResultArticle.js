const React = require('react');

module.exports = React.createClass({
  //NEEDS A FUNCTION TO SAVE EACH article
  
  render: function() {
    return (
      <li>
        {this.props.article.title}
      </li>
    )
  }
});
