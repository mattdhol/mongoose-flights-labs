var express = require('express');
var router = express.Router();
let flightsCtrl = require('../controllers/flights')


router.get('/', flightsCtrl.index)
router.post('/', flightsCtrl.newSubmit)

router.get('/new', flightsCtrl.newFlight)
router.post('/new', flightsCtrl.create)

router.get('/testdata', flightsCtrl.testdata)

router.get('/:id', flightsCtrl.show)



module.exports = router;
