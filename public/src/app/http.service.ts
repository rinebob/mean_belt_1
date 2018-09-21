import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

	constructor(private _http: HttpClient) { 

	//	this.getAuthors();

	}

	createAuthor(author){
		return this._http.post('/authors', author);
	}

//	getAuthors getAuthor createAuthor updateAuthor deleteAuthor 


}


