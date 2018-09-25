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

	createAuthor2: (req, res) => {
		Author.create(req.body)
			.then(
				data =>  {
					if (data) {
						res.json({ status: true, messages: {success: "Author created"}});
						console.log("data = ",data);
						
					}
				}
			)
				
			.catch(
				err => {
					if (err) {
						console.log("authors.js crA2 err. err = ",err);
						let messages = {};
						for (let key in err.errors) {
							messages[key] = err.errors[key].message;
							console.log("authors.js crA2 err. err.errors[key].message = ",err.errors[key].message);
						}
						res.json({ status: false, messages: messages })
					}
				}
			)
		
	}

	//updateAuthor
	
	
	
	
	//deleteAuthor


	

}