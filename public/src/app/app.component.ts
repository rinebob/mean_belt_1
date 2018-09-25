import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Squishy Tomatoes';
	movie: any;
	movies = [];
	selectedMovie: any;
	viewMovie = true;
	review: any;
	reviews = [];
	selectedReview: any;
	viewReview = true;
	messages: any;

	constructor(private _httpService: HttpService){}

	ngOnInit() {
		

		}

		
	
	
		
	
	
	//createAuthor
	
	
	
	//getAllAuthors
	


	
	//showAuthor
	
	
	
	
	//authorToShow
	
	


	
	//editAuthor
	
	
	
	
	
	//updateAuthor
	
	
	
	
	
	//deleteAuthor




}
