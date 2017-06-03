module.exports = function(router, groot) {
  router.get('/', (req, res) => {
    res.sendFile("public/index.html", {"root" : groot});
  });
}