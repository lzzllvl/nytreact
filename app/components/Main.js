const React = require('react');

//include children components
var SavedArticleList = require('./saved/SavedArticleList');
var ResultArticleList = require('./results/ResultArticleList');
var Search = require('./search/Search');

var Main = React.createClass({
  getInitialState: () => {
    return {
      resultArray: [],
      savedArray: []
    }
  },
  setResultArray: (resultArray) => {
    this.setState(Object.assign({}, this.state, {resultArray: resultArray}));
  },

  setSavedArray: (savedArray) => {
    this.setState(Object.assign({}, this.state, {savedArray: savedArray}));
  },
  saveArticle: (article) => {
    let newArray = savedArray.map();
    newArray.push(article);
    this.setState(Object.assign({}, this.state, {savedArray: newArray}));
  },
  componentDidUpdate: (prevProps, prevState) => {

  },
  render: () => {
    return (
      <section className="container">
        <Search setResultArray={this.setResultArray}/>
        <ResultArticleList resultArray={this.state.resultArray}/>
        <SavedArticleList savedArray={this.state.savedArray}/>
      </section>
    )
  }
})