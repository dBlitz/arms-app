var Sequelize = require('sequelize');
require('dotenv').config()

var POSTGRES_DB
if (process.env.POSTGRES_DB == undefined) {
	POSTGRES_DB = 'user_devdb'
}
else {
	POSTGRES_DB = process.env.POSTGRES_DB
	console.log(POSTGRES_DB)
}


async function databaseConnection() {

	var POSTGRES_DB;
	
		if (process.env.POSTGRES_DB == undefined) {
			POSTGRES_DB = 'user_devdb'
		}
		else {
			POSTGRES_DB = process.env.POSTGRES_DB
		}

	var sequelize = await new Sequelize(
		POSTGRES_DB, 
		process.env.POSTGRES_USER, 
		process.env.POSTGRES_PASSWORD, {
			host: process.env.DB_HOST,
			dialect: 'postgres',
			port: 5432
		});
	return sequelize
}

module.exports = {
	databaseConnection
};
