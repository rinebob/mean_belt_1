import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

import { Movie } from '../../../../server/models/movie.js';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
	id: any;
	title: 'Add movie';
	review: any;
	reviews: any;
	movie: any;
	movies: any;
	name: any;
	message: any;
	messages: any;
	viewMovie: any;
	selectedMovie: any;
	appAdd: boolean;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _httpService: HttpService
	) { }

	ngOnInit() {
		this.selectedMovie = "";
		this._route.params.subscribe((params: Params) => {
		//	console.log(params['id']);
		});
		this.appAdd = false;
		this.showMovies();
		
	}

	goHome() {
		this._router.navigate(['/']);
	}

	functionFromChild(eventData){
		console.log("100 show.c.ts dataFromChild.  eventData = ",eventData);
		this.appAdd = eventData;
		this.ngOnInit();
	}

//	showMovie(id: String){
	showMovie(id){
	//	console.log("in show.c.ts movieToShow.  id = ",id)
		let movie = this._httpService.getMovie(id);
		movie.subscribe(data => {
			this.movie = data['data'];
		//	console.log("this.movieToShow.title = ",this.selectedMovie.title)
			
		})
	}

	showMovies(){
		console.log("155 show.c.ts showMovies(). appAdd = ",this.appAdd);
		let movies = this._httpService.getAllMovies();
		movies.subscribe(data => {
		//	console.log("show.c.ts showMovies. post response  data = ",data)
			this.movies = data['movies'];
		//	console.log("show.c.ts showMovies.  this.movies = ",this.movies)
			
			for (var i = 0; i < this.movies.length; i++){
				var avgRating = 0;
				var sum = 0;
				var numRevs = 0;
				var revVal = 0;
		//		console.log("i = ",i," this.movies[i].title = ",this.movies[i].title);
				numRevs = this.movies[i].reviews.length;
		//		console.log("numRevs = this.movies[i].reviews.length-1 = ",numRevs);

				if (numRevs > 0){
					for (var j = 0; j < numRevs; j++){
						revVal = this.movies[i].reviews[j].rating;
		//				console.log("revVal = ",revVal);
						sum += revVal;
		//				console.log("j = ",j," sum = ",sum);
					}
					avgRating = sum / numRevs;
		//			console.log("avgRating = ",avgRating);

				} else {
					avgRating = 0;
				}
				this.movies[i].avgRating = avgRating;
		//		console.log("this.movies[i].avgRating = ",this.movies[i].avgRating);
		//		console.log("final avgRating for ",this.movies[i].title," = ",avgRating);
				sum = 0;
				avgRating = 0;
					
			}
		//	console.log('this.movies = ',this.movies)
			
		})
	}


	showAddMovie(){
		// this._router.navigate(['/add']);
		this.appAdd = true;


	}

	showReviews(id){
		this.showMovie(id);
		this._router.navigate(['/showreviews/'+id]);

	}

	showWriteReview(id){
	//	console.log("show.c.ts passed id = ",id)
		this._router.navigate(['/reviews/'+id]);
	}



}
