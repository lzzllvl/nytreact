const Article = require('../models/Article.js');

module.exports = function(router) {
  router.get('/api', (req, res) => {
    Article.find({}).exec(function(err, data) {
      res.json(data);
    });
  });

  router.post('/api', (req, res) => {
    let newArticle = new Article(req.body);
    newArticle.save((err, doc) => {
      if(err) console.log(err);
      Article.find({}).exec(function(error, data) {
        error ? res.send(error): res.json(data)
      });
    });
  });

  router.delete('/api/:id', (req, res) => {
    Article.remove({_id: req.params.id}, function(err) {
      Article.find({}).exec(function(err, data) {
        err ? res.send(err): res.send(data);
      });
    });
  });
}