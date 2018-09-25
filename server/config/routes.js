require('../models/movie.js')

var movies = require('../controllers/movies.js')


module.exports = function(app){
	
	//index
	
	//movies
	app.get('/movies', function(req, res) {
	//	console.log("routes.js starting /movies route")
		movies.getAllMovies(req, res);
	})

	//getmovie
	app.get('/movies/:_id', function(req, res) {
	//	console.log("200 routes.js starting /movies/:_id route")
		movies.getMovie(req, res);
	})
	
	//createmovie
	app.post('/movies', function(req, res) {
	//	console.log("routes.js starting /movies route")
		movies.createMovie(req, res);
	})

	//create review and update movie
	app.post('/movies/:id/reviews', function(req, res) {
	//	console.log("routes.js starting /reviews post route")
		movies.createReview(req, res);
	})
	
	//deletemovie
	app.delete('/movies/:_id', function(req, res) {
	//	console.log("350 routes.js delete /movies/:_id route")
		movies.deleteMovie(req, res);
	})

	//get reviews
	app.get('/movies/:id/reviews', function(req, res) {
	//	console.log("250 routes.js movies/:id/reviews get route. id = ", req.params.id)
		movies.getReviewsByMovie(req, res);
	})

	//delete review and update movie
	app.delete('/movies/:movieId/reviews/:reviewId', function(req, res) {
		console.log("270 routes.js delete review req.params = ",req.params)
	//	console.log("270 routes.js delete review req = ",req)
		movies.deleteReview(req, res);
	})
	
	



}