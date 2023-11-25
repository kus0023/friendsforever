const router = require('express').Router();

router.use('/events', require('./events'));
router.use('/common-things', require('./common_things'));
router.use('/emergency', require('./emergency_contact'));
router.use('/', (req, res)=>{ return res.render('home.ejs')});

module.exports = router;