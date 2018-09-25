

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
	title: 'Create Review';
	id: any;
	movie: any;
	review: any;
	reviews: any;
	name: any;
	message: any;
	messages: any;
	revMessage: any;
	revMessages: any;
	viewMovie: any;
	selectedMovie: any;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _httpService: HttpService
	) { }

	ngOnInit() {
		this.review = {title: "", name: "", initReview: ""};
		this.review = {name: "", comment: "", rating: 0};
		this.messages = [""];
		this.revMessages = [""];
		this._route.params.subscribe((params: Params) => {
			console.log("1 ngOnInit.  _route.params = ",JSON.stringify(params));
			console.log("2 ngOnInit.  params['id'] = ",params['id']);
			console.log("3 calling this.getMovie()");
			this.getMovie(params['id']);
			this.id = params.id;
			console.log("4 reviews.c.ts onInit() route params subscribe method. this.id= ",this.id);
		});
		this._route.parent.params.subscribe(params => console.log("5 reviews.c.ts ngOnInit The parent params:", JSON.stringify(params)))
		console.log("6 reviews.c.ts ngOnInit this.id = ",this.id)
		this.getMovie(this.id)
	//	this.showReviews(this.id);
	}	

	getMovie(id){
		console.log("10 in reviews.c.ts getMovie()");
		let movie = this._httpService.getMovie(id);
		movie.subscribe(data => {
			console.log("11 reviews.c.ts getMovie. post response  data = ",data)
			this.movie = data['data'];
			console.log("12 reviews.c.ts getMovie.  this.movie = ",this.movie)
			
		})
	}

	createReview(){
		console.log("20 in reviews.c.ts createReview(). this.id= ",this.id);
		let rev = this._httpService.createReview({ "id": this.id, "review": this.review });
		rev.subscribe(response => {
			console.log("21 reviews.c.ts createReview. post response  data = ",response)

			if (response['status'] == false) {
				this.revMessages = response['revMessages'];
			} else {
				if (response['status']==true) {
					this.message = response['message'];
					this.showReviewsPage(this.id);
				}
			}
			
		//	this.review = {name: "", comment: "", rating: 0};
			
		})
	}

	showReviewsPage(id){
		console.log("30 reviews.c.ts in showReviewsPage method")
		this._router.navigate(['/showreviews/'+id]);
	}






}

