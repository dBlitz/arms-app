var express = require('express');
var api = express.Router();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var object_controller = require('../controller/object_controller');
var cors = require('cors')
const fs = require('fs');

api.use(bodyParser.json());

api.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

api.get('/vertices', async function(req, res, next) {
	let rawdata = fs.readFileSync('vertices.json');
	let vertices_per_plane = JSON.parse(rawdata);


	var plane_with_vertices = [];

	var vertices = vertices_per_plane['planes']
	var x;
	var y;
	var z;


	for (let index = 0; index < vertices.length; index++) {

		var specific_plane = vertices[index]
		let the_vertices_per_plane = [];

		for (let i = 0; i < specific_plane.length; i++) {
			x = parseFloat(specific_plane[i][0])
			y = parseFloat(specific_plane[i][1])
			z = parseFloat(specific_plane[i][2])

			the_vertices_per_plane.push([x, y, z])

		}
		plane_with_vertices.push(the_vertices_per_plane)
}

	var jsonObj = JSON.stringify({'planes':plane_with_vertices});
	var parsedObj = JSON.parse(jsonObj)
	console.log(parsedObj["planes"][0])

	return res.json(jsonObj)

	// return res.json()
	// var all_users = await user_controller.getUsers_All();
 // 	return res.json(all_users);

});

api.get('/polygons', async function(req, res, next) {
	let rawdata = fs.readFileSync('square-hole.json');
	let polygons_per_plane = JSON.parse(rawdata);


	var plane_with_vertices = [];

	var planes = polygons_per_plane['planes']
	var the_polygon;
	var the_vertex;
	var x;
	var y;
	var z;
	// console.log(planes)
	// console.log(planes[0])

	for (let i = 0; i < planes.length; i++) {
		for (let j = 0; j < planes[i].length; j++) {
			the_polygon = planes[i][j]
			for (let k = 0; k < the_polygon.length; k++) {
				the_vertex = the_polygon[k]

				// console.log([k])
				// console.log("\n")
				x = parseFloat(the_vertex[0])
				y = parseFloat(the_vertex[1])
				z = parseFloat(the_vertex[2])

				console.log([x,y,z])
				console.log("\n")
    
    // the_points.push( new THREE.Vector3( x, y, z ) );
			}
		}
	}




// 	for (let index = 0; index < vertices.length; index++) {

// 		var specific_plane = vertices[index]
// 		let the_vertices_per_plane = [];


// 		for (let i = 0; i < specific_plane.length; i++) {
// 			x = parseFloat(specific_plane[i][0])
// 			y = parseFloat(specific_plane[i][1])
// 			z = parseFloat(specific_plane[i][2])

// 			the_vertices_per_plane.push([x, y, z])

// 		}
// 		plane_with_vertices.push(the_vertices_per_plane)
// }

// 	var jsonObj = JSON.stringify({'planes':plane_with_vertices});

// 	var parsedObj = JSON.parse(jsonObj)

// 	console.log(parsedObj["planes"][0])


	return res.json("hello")

	// return res.json(jsonObj)

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

