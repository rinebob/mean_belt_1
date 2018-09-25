var mongoose = require('mongoose');
var Movie = mongoose.model('Movie') ;
var Review = mongoose.model('Review') ;


module.exports = {

	//index
	
	
	//movies
	getAllMovies: function(req, res){
		Movie.find({}, function(err, movies) {
			console.log("300 movies.js getAllMovies. movies = ",movies);
	
			if(err) {
				console.log('movies.js getAllMovies.  database pull failed');
			} else { 
				console.log('movies.js getAllMovies. database pull success');
				res.json({message: "Here's your list of movies", movies: movies });
				
			}
		})
	},
	
	
	
	//getmovie
	getMovie: function(req, res){
		Movie.findOne({_id: req.params._id}, function(err, movie) {
			if(err) {
				console.log('301 movies.js getMovie.  database pull failed');
			} else { 
				console.log('302 movies.js getMovie. database pull success');
				res.json({message: "movies.js getMovie Here's your movie", data: movie });
				
			}
		})
	},
	
	
	
	createMovie: (req, res) => {
		Movie.create(req.body)
			.then(
				data =>  {
					if (data) {
						let review = { name: req.body.name, comment: req.body.initReview, rating: req.body.rating};
						Movie.updateOne({ _id: data._id}, {$push: {reviews: review}}, function(err, info) {
							if(err) {
									let messages = {};
									for (let key in err.errors) {
										messages[key] = err.errors[key].message;
									}
									res.json({ status: false, messages: messages })
							} else { 
									res.json({ status: true, messages: {success: "Movie and review added!"}, response: info })
							}
						})
					}
				}
			)
				
			.catch(
				err => {
					if (err) {
						console.log("520 movies.js createMovie() err. err = ",err);
						let messages = {};
						for (let key in err.errors) {
							messages[key] = err.errors[key].message;
							console.log("521 movies.js createMovie() err. err.errors[key].message = ",err.errors[key].message);
						}
						res.json({ status: false, messages: messages })
					}
				}
			)
	},

	//updatemovie
	
	
	
	
	//deletemovie

	deleteMovie: (req, res) => {
		Movie.remove( {_id: req.params._id}, function(err, data){ 
			if(err) {
			res.json({message: "Error deleting movie.", error: err });
		//	console.log('delete cake failed.  err = ',err);
			
			} else { 
		 		res.json({message: "movie deleted"});
			//	console.log('movie delete succeeded. movie data = ',data);
			}
		})

	},

	createReview: (req, res) => {
		Review.create(req.body)
			.then(
				data =>  {
					Movie.update({ _id: req.params.id}, {$push: {reviews: data}}, function(err) {
						if(err) {
							console.log("500 Movies.js. Movie.update.  review not added to Movie. error = ",err);
							console.log("501 movies.js updateMovie err. err = ",err);
								let revMessages = {};
								for (let key in err.errors) {
									revMessages[key] = err.errors[key].message;
									console.log("502 movies.js uM err. err.errors[key].message = ",err.errors[key].message);
								}
								res.json({ status: false, revMessages: revMessages })
						} else { 
								res.json({ status: true, message: "Review successfully added to movie" })
						}
					})
				}
			)
			.catch(
				err => {
					if (err) {
						console.log("510 movies.js createReview err. err = ",err);
						let revMessages = {};
						for (let key in err.errors) {
							revMessages[key] = err.errors[key].message;
							console.log("511 movies.js cR err. err.errors[key].message = ",err.errors[key].message);
						}
						res.json({ status: false, revMessages: revMessages })
					}
				}
			)
	},

	deleteReview: (req, res) => {
		Movie.findOneAndUpdate({_id: req.params.movieId}, { $pull: { reviews: { _id: req.params.reviewId}}},  function(err, movie) {
			console.log("600 movies.js deleteReview. req.params = ",req.params);

			if(err) {
				console.log('601 movies.js deleteReview.  movie.findOne failed');
			} else { 
				console.log('602 movies.js deleteReview. movie.findOne success.  movie = ',movie);
				res.json({message: "movies.js deleteReview Here's your movie", data: movie });
			}
		})
		
	},

}




