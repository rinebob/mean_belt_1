import { Component } from '@angular/core';
import { HttpService } from './http.service';

import { Author } from '..\\..\\..\\server\\models\\author.js'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Favorite Authors';
	author: any;
	authors = [];
	selectedAuthor: any;
	viewAuthor = true;

	constructor(private _httpService: HttpService){}

	// ngOnInit
	
		
	
	
	//createAuthor
	
	
	
	//getAllAuthors
	


	
	//showAuthor
	
	
	
	
	//authorToShow
	
	


	
	//editAuthor
	
	
	
	
	
	//updateAuthor
	
	
	
	
	
	//deleteAuthor




}
