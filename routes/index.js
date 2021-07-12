var express = require('express');
var router = express.Router();

var IndexController = require('../controllers/IndexController')

/* GET home page. */
router.get('/', function (req, res, next) {
  IndexController.get_all_tarefas((result)=>{
    res.render('index', { data: result });
  })
});

module.exports = router;
