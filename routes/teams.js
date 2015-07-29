var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

require('../models/team');
var Team = mongoose.model('Team');

router.get('/teams', function(req, res, next){
	Team.find({}).sort('name').exec(function(err, allTeams){
		if(err) return next(err);

		res.json(allTeams);
	});
});

router.get('/teams/:teamId', function(req, res, next){
	console.log("this is team id", req.params.teamId);
	Team.findOne({_id: req.params.teamId}).exec(function(err, aTeam){
		if(err) return next(err);

		res.json(aTeam);
	});
});

module.exports = router;