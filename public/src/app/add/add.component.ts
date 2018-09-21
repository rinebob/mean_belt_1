import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
	title: 'Add Author';
	author: any;
	name: any;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _httpService: HttpService
		) { }

	ngOnInit() {
		this._route.params.subscribe((params: Params) => {
		//	console.log(params['id']);
			this.author = {name: ""};
		});
	}

	goHome() {
		this._router.navigate(['/']);
	}uth

	createAuthor(author) {
		console.log("add.c.ts start creatAuthor()")
		let observable = this._httpService.createAuthor({data: this.author});
		observable.subscribe(data => {
			console.log("back in createAuthor().  new posted Author data = ",data);
			// console.log("back in createAuthor().  new posted Author info.  data['data'][name] = ",data['data']['name']);
			this.author = { name: ""};
		});
	}

}
