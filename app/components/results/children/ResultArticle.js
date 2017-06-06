const React = require('react');

class ResultArticle extends React.Component {
  //NEEDS A FUNCTION TO SAVE EACH article
  constructor(props) {
    super(props);
    this.onClick = () => {
      this.props.saveArticle(this.props.article);
    }
  }

  render() {
    return (
      <li className="articles">
        <h5 className="inline"><a href={this.props.article.url}>{this.props.article.title}</a></h5>
        <span>
          <button className="btn right inline" onClick={this.onClick}>Save</button>
        </span>
      </li>
    )
  }
};

module.exports = ResultArticle;