var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// res.render('index', { title: 'Users' });

 	res.send({"test":'123'});
});

router.post('/', function(req, res, next) {
	// res.render('index', { title: 'Users' });
	
 	res.send({"test":'456'});
});

module.exports = router;
