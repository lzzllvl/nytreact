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
      //TODO format articles
      let formattedArticles = [];
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
                className="btn btn-primary"
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