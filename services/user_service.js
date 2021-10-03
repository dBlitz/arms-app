var connection = require('../database/config/db_connection');
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
var secret_key = require('../database/config/auth/secret_key').SECRET_KEY.toString();


async function createUser(user) {
	var sequelize = await connection.databaseConnection();
	var User = sequelize.import('../database/models/user.js'); 
	var password = await User.setPassword(user.password);
	const createdUser = await User.create({ email_address: user.email_address,
		firstName: user.firstName, lastName: user.lastName, 
		password: password, roles: user.roles});
	sequelize.close();

	 var token = jwt.sign({ id: createdUser.id, roles: createdUser.roles}, secret_key);

	return token;
}


async function getUsers_All() {
	var sequelize = await connection.databaseConnection();
	var User = sequelize.import('../database/models/user.js');    
	var allUsers = await User.findAll().then(users => {
		const response = users;
		sequelize.close()
		return response;
	});
	return allUsers;
}

async function getUser_ByID(user_id) {
	var sequelize = await connection.databaseConnection();
	var User = sequelize.import('../database/models/user.js');    
	var theUser = await User.findOne({ where: { id: user_id } }).then(user => {
		const response = user;
		sequelize.close();
		return response;
	});
	return theUser;
}


async function updateUser(user_info) {
	var sequelize = await connection.databaseConnection();
	var User = sequelize.import('../database/models/user.js'); 
	const user = await User.findByPk(user_info.id);
	if (user === null) {
		console.log('Not found!');
	} else {
		Object.keys(user_info).forEach(function(key) {
			var value = user_info[key]
			eval("user." + key + " = " + 'value');
		});
		var saved = await user.save();

		return user;
	}
}

async function login(user) {
	var sequelize = await connection.databaseConnection();
	var User = sequelize.import('../database/models/user.js'); 
	var user_authenticated = await User.authenticate(user.email_address, user.password)
	return user_authenticated;
}

module.exports = {
	getUsers_All,
	createUser, 
	getUser_ByID,
	login,
	updateUser
};