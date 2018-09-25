
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-showreviews',
  templateUrl: './showreviews.component.html',
  styleUrls: ['./showreviews.component.css']
})
export class ShowreviewsComponent implements OnInit {
	title: 'Show Reviews';
	id: any;
	movie: any;
	review: any;
	reviews: any;
	name: any;
	message: any;
	messages: any;
	viewMovie: any;
	selectedMovie: any;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _httpService: HttpService
	) { }

	ngOnInit() {
		this.review = {name: "", comment: "", rating: 0};
		this.movie = {title: "", name: ""};
		this._route.params.subscribe((params: Params) => {
			console.log("30 showrevs onInit params[id] = ",params['id']);
			this.id = params.id;
		});
	//	console.log("40 showrevs.c.ts ngOnInit b4 getMovie.  this.id = ",this.id)
		this.getMovie(this.id)
		this.showReviews(this.id);
	}	

	showReviews(id){
	//	console.log("50 showrevs.c.ts showReviews(). id = ",id);

		let title = this._httpService.getMovie(id);
		title.subscribe(movie => {
			console.log("55 showrevs.c.ts showRevs getMovie.  movie = ",movie);
			console.log("56 showrevs.c.ts showRevs getMovie.  movie['data']['reviews'] = ",movie['data']['reviews']);
			this.reviews = movie['data']['reviews'];
		})

	}

	showMovies(){
		console.log("60 showreviews.c.ts showMovies(). nav to /show");
		this._router.navigate(['/show']);
	}

	getMovie(id){
		console.log("70 showreviews.c.ts getMovie(). id = ",id);
		let movie = this._httpService.getMovie(id);
		movie.subscribe(data => {
			console.log("71 showrevs.c.ts getMovie(). post response  data = ",data)
			this.movie = data['data'];
			console.log("72 showrevs.c.ts getMovie().  this.movie = ",this.movie)
			
		})
	}

	deleteMovie(id){
		console.log("75 showreviews.c.ts deleteMovie(). id = ",id);
		let movie = this._httpService.deleteMovie(id);
		movie.subscribe(data => {
			console.log("75 showrevs.c.ts deleteMovie(). post response  data = ",data)
			// this.movie = data['data'];
			// console.log("75 showrevs.c.ts deleteMovie().  this.movie = ",this.movie)
			this.showMovies();
		})
	}

	deleteReview(movieId, reviewId){
		console.log("80 showreviews.c.ts deleteReview(). reviewId = ",reviewId," movieId = ",movieId);
		let delRev = this._httpService.deleteReview(movieId, reviewId);
		delRev.subscribe(data => {
			console.log("75 showrevs.c.ts deleteReview(). post response  data = ",data)
			// this.movie = data['data'];
			// console.log("75 showrevs.c.ts deleteReview().  this.movie = ",this.movie)
			this.showReviews(movieId);
		})
	}
}

