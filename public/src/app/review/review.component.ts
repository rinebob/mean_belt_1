import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
	title: 'Show Reviews';
	id: any;
	movie: any;
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
		this._route.params.subscribe((params: Params) => {
		//	console.log(params['id']);
		});
		
		this.showReviews(this.id);
	}	

	showReviews(id){
		console.log("in app.c.ts showReviews()");
		let reviews = this._httpService.getAllReviews(id);
		reviews.subscribe(data => {
			console.log("show.c.ts showReviews. post response  data = ",data)
			this.reviews = data['data'];
			console.log("show.c.ts showReviews.  this.reviews = ",this.reviews)
			
		})
	}

	showWriteReview(id){

	}








}
