var mongoose = require('mongoose');
var Author = mongoose.model('Author') ;


module.exports = {

	//index
	
	
	//Authors
	
	
	
	//getAuthor
	
	
	
	//createAuthor
	createAuthor: function(req, res){

		console.log("authors.js createAuthor()- POST DATA", req.body);
		var author = new Author({name: req.body.data.name});
		
		author.save(function(err) {
			if(err) {
				console.log('authors.js createAuthor - author create failed.  err = ', err);
				res.json({message: "Author not added", error: err });
			} else { 
				console.log('authors.js createAuthor() successful.  author id = ',author._id,' author = ',author);
				res.json({message: "Author added", data: author });
			}
		})
	},

	//updateAuthor
	
	
	
	
	//deleteAuthor


	

}