import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Movie } from '../../../../server/models/movie.js';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
	@Input() myMovies: Movie[];
	@Output() movieEventEmitter = new EventEmitter();
	id: any;
	title: 'Add Movie and Review';
	movie: any;
	review: any;
	message: any;
	messages: any;
	appAdd: boolean;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _httpService: HttpService
		) { }

	ngOnInit() {
		this.movie = {title: "", name: ""};
		this.review = {name: "", comment: "", rating: 0};
		this.messages = { success: "", name: "" };
		this.appAdd = true;
		this._route.params.subscribe((params: Params) => {
			this.id = params.id;
		//	console.log("79 params.id = ",params.id," params['id'] = ",params['id']);
		});
	}

	createMovie(movie){
		let obs = this._httpService.createMovie(this.movie);
		obs.subscribe(response => {
			if (response['status'] == false) {
				this.messages = response['messages'];
			} else {
				if (response['status']==true) {
					this.message = response['messages']["success"];
					this.showMovies()
					this.movie = {title: "", name: "", initReview: ""};
				}
			}
		})
	}

	showMovies(){
	//	console.log("82 add.c.ts showMovies()")
		this.appAdd = false;
		this._router.navigate(['/show']);
	}

	triggerEvent(){
		this.appAdd = false
		this.movieEventEmitter.emit(this.appAdd); 
	}

	




}
