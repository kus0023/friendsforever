const router = require('express').Router();
const eventController = require('../controllers/common_things_controller');

router.get('/', eventController.getCommonThingsPage);


module.exports = router;