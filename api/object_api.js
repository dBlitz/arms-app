var express = require('express');
var api = express.Router();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var object_controller = require('../controller/object_controller');
var cors = require('cors')

api.use(bodyParser.json());

api.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

api.get('/vertices', async function(req, res, next) {

	console.log("hello")

	return res.json("hello")

	// return res.json()
	// var all_users = await user_controller.getUsers_All();
 // 	return res.json(all_users);

});

// GET All Users
// api.get('/all', async function(req, res, next) {
// 	var all_users = await user_controller.getUsers_All();
//  	return res.json(all_users);

// });

// //POST Create User
// api.post('/create', async function(req, res, next) {

// 	var the_user = req.body;
// 	if (the_user.email_address === undefined ) {
// 		the_user = JSON.parse(the_user)
// 	}
// 	var createdUser =  await user_controller.createUser(the_user)

// 	res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	
// 	return res.status(200).json(createdUser);

// });
// // GET User by ID
// api.get('/:user_id', async function(req, res, next) {
// 	var user = await user_controller.getUser_ByID(req.params.user_id);
// 	return res.json(user);

// });
//   // return res.status(200).send({ auth: true, token: token });

// api.post('/login', async function(req, res, next) {

// 	var the_user = req.body;
// 	if (the_user.email_address === undefined ) {
// 		the_user = JSON.parse(the_user)
// 	}
// 	var login_response = await user_controller.login(the_user);

// 	console.log(login_response)
// 	res.header("Access-Control-Allow-Origin", "*");
//   	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

// 	return res.json(
// 		login_response
// 		);
// });

// api.post('/update', async function(req, res, next) {
// 	var updated_user_response = await user_controller.updateUser(req.body);
// 	return res.json({
// 		  updated_user_response
// 		});
// });


module.exports = api;

