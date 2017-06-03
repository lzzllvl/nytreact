const Article = require('../models/Article.js');

module.exports = function(router) {
  router.get('/api', (req, res) => {
    Article.find({}).exec(function(err, data) {
      res.json(data);
    });
  });

  router.post('/api', (req, res) => {
    let newArticle = new Article(req.body);
    newArticle.save((err, doc) => err ? res.send(err): res.json(doc));
  });

  router.delete('/api/:id', (req, res) => {
    Article.remove({_id: req.params.id}, function(err) {
      err ? res.send(err): null;
    });
  });
}