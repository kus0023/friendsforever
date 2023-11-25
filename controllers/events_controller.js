const data = require('../models/events_model');


module.exports.getGatheringPage = function(req, res)  {

    return res.render('gathering_page', {gatherings: data.gathering})
}

module.exports.createEventPage = function(req, res){
    return res.render('create_events');
}

module.exports.createEvent = function(req, res){
    const {name, description, location, host} = req.body
    data.createEvent(name, description, location, host);
    return res.redirect("/events")
}