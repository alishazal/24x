var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/listener', function(req, res, next) {
  res.render("listener")
});

router.get('/speaker', function (req, res, next) {
  res.render("speaker");
});

module.exports = router;
