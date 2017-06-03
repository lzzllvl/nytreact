const axios = require('axios');

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

const helpers = {
  stringifyUrl: (queryObject) => {
    return `${queryURLBase}`
            + `api-key=${authKey.replace(':', '%3A')}&`
            + `q=${queryObject.term.toLowerCase().replace(' ', '%20')}&`
            + `begin_date=${queryObject.startYear}0101&` // Jan 1 of startYear
            + `end_date=${queryObject.endYear}0101`;
  },
  runQuery: (url) => {
    return axios.get(url).then(function(response) {
      //console.log(response);
      return response;
    });
  },

  saveArticle: (article) => {
    return axios.post('/api', article);
  },
  removeArticle: (article) => {
    return axios.delete('/api/' + article._id);
  }
  ,

  getSavedArticles: () => {
    return axios.get('/api');
  }
}

module.exports = helpers;