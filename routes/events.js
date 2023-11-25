const router = require('express').Router();
const eventController = require('../controllers/events_controller');

router.get('/', eventController.getGatheringPage);
router.get('/create-events', eventController.createEventPage);

router.post('/create', eventController.createEvent);

module.exports = router;