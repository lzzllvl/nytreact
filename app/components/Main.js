const React = require('react');

//include children components
var SavedArticleList = require('./saved/SavedArticleList');
var ResultArticleList = require('./results/ResultArticleList');
var Search = require('./search/Search');

var Main = React.createClass({
  getInitialState: () => {
    resultArray: [],
    savedArray: []
  },
  setResultArray: (resultArray) => {
    this.setState(Object.assign({}, this.state, {resultArray: resultArray}));
  },

  setSavedArray: (savedArray) => {
    this.setState(Object.assign({}, this.state, {savedArray: savedArray}));
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