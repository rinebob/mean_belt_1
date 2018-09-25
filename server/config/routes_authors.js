require('../models/author.js')

var authors = require('../controllers/authors.js')


module.exports = function(app){
	
	//index
	
	
	
	
	//authors
	
	
	
	
	//getAuthor
	
	
	
	
	//createAuthor
	app.post('/authors', function(req, res) {
		console.log("routes.js starting /authors route")
		authors.createAuthor2(req, res);
	})

	
	
	
	
	
	//updateAuthor
	
	
	
	
	//deleteAuthor
	


	



}