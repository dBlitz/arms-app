const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const fs = require('fs');


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/object/vertices', function(req, res) {



	let rawdata = fs.readFileSync('vertices_per_plane.json');
	let vertices_per_plane = JSON.parse(rawdata);

	var vertices = vertices_per_plane['planes']
	var x;
	var y;
	var z;

	for (let i = 0; i < vertices.length; i++) {
		x = parseFloat(vertices[i][0])
		y = parseFloat(vertices[i][1])
		z = parseFloat(vertices[i][2])

		console.log([x, y, z])

	}

	res.send("hello world!")


  })


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
