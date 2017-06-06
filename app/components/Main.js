const React = require('react');

//include children components
var SavedArticleList = require('./saved/SavedArticleList');
var ResultArticleList = require('./results/ResultArticleList');
var Search = require('./search/Search');
var helpers = require('../utils/helpers');


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultArray: [],
      savedArray: []
    }

    this.setResultArray = this.setResultArray.bind(this);
    this.setSavedArray = this.setSavedArray.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  setResultArray(resultArray) {
    this.setState(Object.assign({}, this.state, {resultArray: resultArray}));
  }

  setSavedArray(savedArray) {
    this.setState(Object.assign({}, this.state, {savedArray: savedArray}));
  }

  saveArticle(article) {
    helpers.saveArticle(article).then((response) => {
      console.log(response);
        this.setState({
          savedArray: response.data
        })//this.setState(Object.assign({}, this.state, {savedArray:  newArray}));
    });
  }

  deleteArticle(article) {
    helpers.removeArticle(article).then((response) => {
      this.setState({
        savedArray: response.data
      })
    });//this.setState({savedArray: newSavedArray});
  }

  //maybe move to child components
  // componentDidUpdate: function(prevProps, prevState) {
  //   console.log(this.state, '\n', prevState);
  //   console.log(JSON.stringify(this.state.savedArray) !== JSON.stringify(prevState.savedArray));
  //   if(this.state !== prevState) return;
  //   helpers.getSavedArticles().then((response) => {
  //     let saved = response.data.length
  //               ? response.data
  //               : [];
  //     this.setState({
  //       savedArray: saved
  //     });
  //   });
  // },

  componentDidMount() {
    helpers.getSavedArticles().then((response) => {
      let saved = response.data.length
                ? response.data
                : [];
      this.setState({
        savedArray: saved
      });
    });
  }

  render() {
    return (
      <section className="container">
        <Search setResultArray={this.setResultArray}/>
        <ResultArticleList
          resultArray={this.state.resultArray}
          saveArticle={this.saveArticle}/>
        <SavedArticleList
          savedArray={this.state.savedArray}
          deleteArticle={this.deleteArticle}/>
      </section>
    )
  }
};

module.exports = Main;