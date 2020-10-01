var express      = require('express');
const USER       = require('../database/user');
const RESTAURANT = require('../database/restaurant');
const MENUS      = require('../database/menus');
const ORDEN      = require('../database/orden');
const FACTURAS   = require('../database/facturas');
var router       = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//*************user post************** */
router.post('/user',(req, res) => {
  var params = req.body;
  var user = new USER(params);
  user.save().then(() => {
    res.status(200).json({
      msn: "ususario creado"
    })
  });
});

module.exports = router;
