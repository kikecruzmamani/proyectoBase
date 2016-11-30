var express = require('express');
var router = express.Router();
var reclamo ={tipodereclamo:'odeco',
              observacion:'mal servicio',
              fechadereclamo:'29/11/2016'};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyecto final', subtitle: 'avances en computacion', reclamo:reclamo});
});

module.exports = router;
