const React = require('react');

class SavedArticle extends React.Component {

  constructor(props){
    super(props);
    this.onClick = () => {
      this.props.deleteArticle(this.props.article);
    }
  }
  render() {
    return (
      <li className="articles">
        <h5 className="left inline"><a href={this.props.article.url}>{this.props.article.title}</a></h5>
        <span>
          <button className="btn right inline" onClick={this.onClick}>Delete</button>
        </span>
      </li>
    )
  }
};

module.exports = SavedArticle;