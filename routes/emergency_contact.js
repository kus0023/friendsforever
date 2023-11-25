const router = require('express').Router();
const emergencyContactController = require("../controllers/emergency_contact_controller");

router.get('/', emergencyContactController.getEmergencyPage);

module.exports = router;