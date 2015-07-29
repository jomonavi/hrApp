var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

require('../models/employee');
require('../models/team');
var Employee = mongoose.model('Employee');
var Team = mongoose.model('Team');

router.get('/employees', function(req, res, next){
	Employee.find().sort('name.last').exec(function(err, allEmployees){
		if(err) return next(err);

		//otherwise, respond w/ valid data
		res.json(allEmployees);
	});
});

router.get('/employees/:employeeId', function(req, res, next){
	console.log(req.params);
	Employee.findOne({id: req.params.employeeId}).populate('team').exec(function(err, anEmployee){
			if(err) return next(err);

			if(!anEmployee) res.send(404);

			res.json(anEmployee);
	});
});

router.put('/employees/:employeeId', function(req, res, next){
	Employee.update({id: req.params.employeeId}, req.body, function(err, numberAffected, response) {
    	if (err) return next(err);

    	res.send(200);
  }).exec();
});

module.exports = router;