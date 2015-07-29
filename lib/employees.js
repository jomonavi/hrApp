
/////////////old example w/o using mongoDB
// var employeeDb = require('../database/employees');
// function getEmployees (callback) {

// 	setTimeout(function () {
//     	callback(null, employeeDb);
// 	}, 500); 
// }

// function getEmployee (employeeId, callback) {

// 	getEmployees(function (error, data) {
//     	if (error) {
//       		return callback(error);
// 		}
    	
//   //   	var result = data.find(function(item) {
//   //   		return item.id === employeeId;
// 		// });
// 	var result;
// 		data.forEach(function(anEmployee){
// 			if(anEmployee.id === employeeId) result = anEmployee;
// 		});

// 		callback(null, result);
// 	});
// }


var mongoose = require('mongoose');
require('../models/employee');
var Employee = mongoose.model('Employee');

exports.getEmployees = getEmployees;
exports.getEmployee = getEmployee;

function getEmployees (callback) {
  Employee.find().sort('name.last').exec(callback);
}

function getEmployee (employeeId, callback) {
  Employee.findOne({
    id: employeeId
  }).populate('team').exec(callback);
}