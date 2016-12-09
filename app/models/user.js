// app/models/user.js

var mongoose = require('mongoose');

/*
 * module.exports = mongoose.model('User', {
 * 
 * username : { type : String, lowercase : true, unique : true, required : true },
 * password : { type : String, required : true }, hash : { type : String }, salt : {
 * type : String }, created : { type : Date, // default: Date.now }, lastLogin : {
 * type : Date }, cartId : { type : Number }
 * 
 * });
 */

var userSchema = new mongoose.Schema({

	username : {
		type : String,
		lowercase : true,
		unique : true,
		required : true
	},
	password : {
		type : String,
		required : true
	},
	hash : {
		type : String
	},
	salt : {
		type : String
	},
	created : {
		type : Date, // default: Date.now 
	}, 
	lastLogin : {
		type : Date
	},
	cartId : {
		type : Number
	}

});
