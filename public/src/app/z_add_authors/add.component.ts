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
	message: any;
	messages: any;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _httpService: HttpService
		) { }

	ngOnInit() {
		this.author = {name: ""};
		this.messages = { success: "", name: "" }
		this._route.params.subscribe((params: Params) => {
		//	console.log(params['id']);
		});
	}

	goHome() {
		this._router.navigate(['/']);
	}

	createAuthor(author) {
		console.log("add.c.ts start creatAuthor()")
		let observable = this._httpService.createAuthor(this.author);
		observable.subscribe(data => {
			console.log("back in createAuthor().  new posted Author data = ",data);
			// console.log("back in createAuthor().  new posted Author info.  data['data'][name] = ",data['data']['name']);
			this.author = { name: ""};
		});
	}

	// from Mohammed
	createAuthor2(author){
		let obs = this._httpService.createAuthor(this.author);
		obs.subscribe(response => {
			if (response['status'] == false) {
				this.messages = response['messages'];
				this.ngOnInit();
			} else {
				if (response['status']==true) {
					this.message = response['messages']["success"];
					console.log("cA2 success this.messages = ",this.message);
					this.author = {name: ""};
					this.ngOnInit();
				}
			}
			console.log("cA2 subscribe onInit")
		})
	}

}
