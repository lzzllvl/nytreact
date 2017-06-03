const React = require('react');

//include children components
var SavedArticleList = require('./saved/SavedArticleList');
var ResultArticleList = require('./results/ResultArticleList');
var Search = require('./search/Search');
var helpers = require('../utils/helpers');


var Main = React.createClass({
  getInitialState: () => {
    return {
      resultArray: [],
      savedArray: []
    }
  },

  setResultArray: function(resultArray) {
    this.setState(Object.assign({}, this.state, {resultArray: resultArray}));
  },

  setSavedArray: function(savedArray) {
    this.setState(Object.assign({}, this.state, {savedArray: savedArray}));
  },

  saveArticle: function(article) {
    let newArray = this.state.savedArray.map((val) => val);//clone array
    newArray.push(article);
    helpers.saveArticle(article).then((result) => {
      this.setState(Object.assign({}, this.state, {savedArray:  newArray}));
    });
  },

  deleteArticle: function(article) {
    helpers.removeArticle(article).then(() => {
      this.setState({savedArray: []});
    });
  },

  //maybe move to child components
  componentDidUpdate: function(prevProps, prevState) {

      helpers.getSavedArticles().then((response) => {
        let saved = response.data.length
                  ? response.data
                  : [];
        this.setState({
          savedArray: saved
        });
      });

  },

  componentDidMount: function() {
    helpers.getSavedArticles().then((response) => {
      let saved = response.data.length
                ? response.data
                : [];
      this.setState({
        savedArray: saved
      });
    });
  },

  render: function() {
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
});

module.exports = Main;