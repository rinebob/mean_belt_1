import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

	constructor(private _http: HttpClient) { 

	}

	//createmovie 
	createMovie(movie){
		return this._http.post('/movies', movie);
	}

	//	getmovies
	getAllMovies(){
		return this._http.get('/movies');
	}


	// getMovie
	getMovie(id){
	//	console.log("100 service.ts getMovie().  id = ",id)
		return this._http.get('/movies/'+id);
	}
	
	//updatemovie
	
	
	
	//deleteMovie 
	deleteMovie(id){
	//	console.log("110 service.ts deleteMovie().  id = ",id)
		return this._http.delete('/movies/'+id);
	}

	// createReview
	createReview(data){
		console.log("110 service.js createReview(data).  data = ",data)
		return this._http.post('/movies/'+data.id+'/reviews', data.review);
	}

	
	//	deleteReview
	deleteReview(movieId, reviewId){
		console.log("120 service.js deleteReview movieId = ",movieId," reviewId = ",reviewId)
		return this._http.delete('/movies/'+movieId+'/reviews/'+reviewId);
	}


}


