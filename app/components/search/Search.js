const React = require('react');
const helpers = require('../../utils/helpers');

var Search = React.createClass({
  getInitialState: function() {
    return {
      term: "",
      startYear: 2000,
      endYear: 2017
   };
  },

  handleChange: function(event) {
    let newState = this.state;
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    helpers.runQuery(helpers.stringifyUrl(this.state)).then((data) => {
      console.log(data.data);
      let articleObjects = data.data.response.docs
      let formattedArticles = [];
      articleObjects.forEach(function(value) {
        let counter = 0;
        let author = value.byline ? value.byline.original :  "Unknown Author";
        let formatted = {
          //key: `resArticle${++counter}`,
          title: value.headline.main,
          author: author,
          abstract: value.abstract,
          url: value.web_url
        };
        formattedArticles.push(formatted);
      });
      console.log(formattedArticles);
      this.props.setResultArray(formattedArticles);
      //reset search
      this.setState({
        term: "",
        startYear: 2000,
        endYear: 2017
     });
    });
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Topic</strong>
              </h4>

              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required/>

              <h4 className="">
                <strong>Start Year</strong>
              </h4>

              <input
                value={this.state.startYear}
                type="text"
                className="form-control text-center"
                id="startYear"
                onChange={this.handleChange}
                required/>

              <h4 className="">
                <strong>End Year</strong>
              </h4>

              <input
                value={this.state.endYear}
                type="text"
                className="form-control text-center"
                id="endYear"
                onChange={this.handleChange}
                required/>


              <br />
              <button
                className="btn"
                type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Search;