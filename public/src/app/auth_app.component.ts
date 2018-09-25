import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Favorite Authors';
	author: any;
	authors = [];
	selectedAuthor: any;
	viewAuthor = true;
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
