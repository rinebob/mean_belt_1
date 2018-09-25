(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n\tcolor: white !important;\r\n}"

/***/ }),

/***/ "./src/app/add/add.component.html":
/*!****************************************!*\
  !*** ./src/app/add/add.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<h5>Submit a movie and your review</h5>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<form (submit)=\"createMovie()\">\n\t\t\t\t<!-- front end val - disables button until valid data entered -->\n\t\t\t\t\n\t\t\t\t<p> {{ messages | json }} </p>\n\t\t\t\t<p> {{ movie | json }} </p>\n\n\t\t<!-- front end val -->\n\t\t\t\t<div *ngIf=\"!title.valid && (title.dirty || title.touched)\">\n\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"title.errors.required\">Title is required</span>\n\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"title.errors.minlength\">Title must be greater than 2 characters</span>\n\t\t\t\t</div>\n\n\t\t<!-- back end val - -->\n\t\t\t\t<span class=\"text-danger\" *ngIf=\"messages.title\">{{ messages.title }}</span>\n\t\t\t\t<span class=\"text-success\" *ngIf=\"message\">{{ message }}</span>\n\t\t\t\t\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label class=\"col-3\" path=\"title\">Movie Title:</label>\n\t\t\t\t\t<input type=\"text\" required minlength=\"3\" name=\"movie.title\" #title=\"ngModel\" [(ngModel)]=\"movie.title\" />\n\t\t\t\t</div>\n\t\t<!-- front end val -->\n\t\t\t\t<div *ngIf=\"!name.valid && (name.dirty || name.touched)\">\n\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"name.errors.required\">Name is required</span>\n\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"name.errors.minlength\">Name must be greater than 2 characters</span>\n\t\t\t\t</div>\n\n\t\t<!-- back end val - -->\n\t\t\t\t<span class=\"text-danger\" *ngIf=\"messages.name\">{{ messages.name }}</span>\n\t\t\t\t<span class=\"text-success\" *ngIf=\"message\">{{ message }}</span>\n\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label class=\"col-3\" path=\"name\">Your name:</label>\n\t\t\t\t\t<input type=\"text\" required minlength=\"3\" name=\"movie.name\" #name=\"ngModel\" [(ngModel)]=\"movie.name\" />\n\t\t\t\t</div>\n\t\t<!-- back end val - -->\n\t\t\t\t<span class=\"text-danger\" *ngIf=\"messages.name\">{{ messages.rating }}</span>\n\t\t\t\t<span class=\"text-success\" *ngIf=\"message\">{{ message }}</span>\n\n\n\t\t\t\t<div class=\"form-group col-6\">\n\t\t\t\t\t<label for=\"rating\">Stars:</label>\n\t\t\t\t\t<select class=\"form-control\" id=\"rating\" name=\"movie.rating\" [(ngModel)]=\"movie.rating\">\n\t\t\t\t\t\t<option value=\"1\">1 star</option>\n\t\t\t\t\t\t<option value=\"2\">2 stars</option>\n\t\t\t\t\t\t<option value=\"3\">3 stars</option>\n\t\t\t\t\t\t<option value=\"4\">4 stars</option>\n\t\t\t\t\t\t<option value=\"5\">5 stars</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t<!-- front end val -->\n\t\t\t\t<div *ngIf=\"!initReview.valid && (initReview.dirty || initReview.touched)\">\n\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"initReview.errors.required\">Review is required</span>\n\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"initReview.errors.minlength\">Review must be greater than 2 characters</span>\n\t\t\t\t</div>\n\t\t<!-- back end val - -->\n\t\t\t\t<span class=\"text-danger\" *ngIf=\"messages.name\">{{ messages.initReview}}</span>\n\t\t\t\t<span class=\"text-success\" *ngIf=\"message\">{{ message }}</span>\n\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label class=\"col-3\">Your review:</label>\n\t\t\t\t\t<!-- <input type=\"text\" name=\"movie.initReview\"[(ngModel)]=\"movie.initReview\"/> -->\n\t\t\t\t\t<input type=\"text\" required minlength=\"3\" name=\"movie.initReview\" #initReview=\"ngModel\" [(ngModel)]=\"movie.initReview\" />\n\t\t\t\t</div>\n\t\t<!-- front end val - button disabled until fully valid data entered -->\n\t\t\t\t<input [disabled]=\"!title.valid\" class=\"btn btn-primary btn-sm\" type=\"submit\" value=\"Submit\"/>\n\t\t\t\t<a (click)=\"triggerEvent($event)\" class=\"btn btn-primary btn-sm\" >Cancel</a>\n\t\t\t\t<a (click)=\"triggerEvent($event)\" class=\"btn btn-primary btn-sm\" >Invoke</a>\n\t\t\t\t\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddComponent = /** @class */ (function () {
    function AddComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.movieEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movie = { title: "", name: "" };
        this.review = { name: "", comment: "", rating: 0 };
        this.messages = { success: "", name: "" };
        this.appAdd = true;
        this._route.params.subscribe(function (params) {
            _this.id = params.id;
            //	console.log("79 params.id = ",params.id," params['id'] = ",params['id']);
        });
    };
    AddComponent.prototype.createMovie = function (movie) {
        var _this = this;
        var obs = this._httpService.createMovie(this.movie);
        obs.subscribe(function (response) {
            if (response['status'] == false) {
                _this.messages = response['messages'];
            }
            else {
                if (response['status'] == true) {
                    _this.message = response['messages']["success"];
                    _this.showMovies();
                    _this.movie = { title: "", name: "", initReview: "" };
                }
            }
        });
    };
    AddComponent.prototype.showMovies = function () {
        //	console.log("82 add.c.ts showMovies()")
        this.appAdd = false;
        this._router.navigate(['/show']);
    };
    AddComponent.prototype.triggerEvent = function () {
        this.appAdd = false;
        this.movieEventEmitter.emit(this.appAdd);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AddComponent.prototype, "myMovies", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddComponent.prototype, "movieEventEmitter", void 0);
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _showreviews_showreviews_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./showreviews/showreviews.component */ "./src/app/showreviews/showreviews.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _show_show_component__WEBPACK_IMPORTED_MODULE_2__["ShowComponent"] },
    { path: 'show', component: _show_show_component__WEBPACK_IMPORTED_MODULE_2__["ShowComponent"] },
    { path: 'reviews/:id', component: _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_6__["ReviewsComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"] },
    { path: 'edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
    { path: 'review', component: _review_review_component__WEBPACK_IMPORTED_MODULE_5__["ReviewComponent"] },
    { path: 'showreviews/:id', component: _showreviews_showreviews_component__WEBPACK_IMPORTED_MODULE_7__["ShowreviewsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<h1 class=\"text-align: center\">Squishy Tomatoes</h1>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'Squishy Tomatoes';
        this.movies = [];
        this.viewMovie = true;
        this.reviews = [];
        this.viewReview = true;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _showreviews_showreviews_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./showreviews/showreviews.component */ "./src/app/showreviews/showreviews.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _show_show_component__WEBPACK_IMPORTED_MODULE_7__["ShowComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
                _review_review_component__WEBPACK_IMPORTED_MODULE_10__["ReviewComponent"],
                _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_11__["ReviewsComponent"],
                _showreviews_showreviews_component__WEBPACK_IMPORTED_MODULE_12__["ShowreviewsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditComponent = /** @class */ (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    //createmovie 
    HttpService.prototype.createMovie = function (movie) {
        return this._http.post('/movies', movie);
    };
    //	getmovies
    HttpService.prototype.getAllMovies = function () {
        return this._http.get('/movies');
    };
    // getMovie
    HttpService.prototype.getMovie = function (id) {
        //	console.log("100 service.ts getMovie().  id = ",id)
        return this._http.get('/movies/' + id);
    };
    //updatemovie
    //deleteMovie 
    HttpService.prototype.deleteMovie = function (id) {
        //	console.log("110 service.ts deleteMovie().  id = ",id)
        return this._http.delete('/movies/' + id);
    };
    // createReview
    HttpService.prototype.createReview = function (data) {
        console.log("110 service.js createReview(data).  data = ", data);
        return this._http.post('/movies/' + data.id + '/reviews', data.review);
    };
    //	deleteReview
    HttpService.prototype.deleteReview = function (movieId, reviewId) {
        console.log("120 service.js deleteReview movieId = ", movieId, " reviewId = ", reviewId);
        return this._http.delete('/movies/' + movieId + '/reviews/' + reviewId);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/review/review.component.css":
/*!*********************************************!*\
  !*** ./src/app/review/review.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/review/review.component.html":
/*!**********************************************!*\
  !*** ./src/app/review/review.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  review works!\n</p>\n"

/***/ }),

/***/ "./src/app/review/review.component.ts":
/*!********************************************!*\
  !*** ./src/app/review/review.component.ts ***!
  \********************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/review/review.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/reviews/reviews.component.css":
/*!***********************************************!*\
  !*** ./src/app/reviews/reviews.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n\tcolor: white !important;\r\n}"

/***/ }),

/***/ "./src/app/reviews/reviews.component.html":
/*!************************************************!*\
  !*** ./src/app/reviews/reviews.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"col\">\n\t\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<h5 *ngIf=\"movie\">Add a review for {{movie.title}}</h5>\n\t\t</div>\n\t</div>\n\n\n\t<!-- from Med - front and back end validation -->\n\n\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<form (submit)=\"createReview()\">\n\n\t\t\t\t<!-- front end val - disables button until valid data entered\n\t\t\t\tback end val - after user clicks button will display success message or errors if any -->\n\n\t\t\t\t<p> {{ revMessages | json }} </p>\n\t\t\t\t<p> {{ review | json }} </p>\n\t\t\t\t\n\t\t\t\t<div *ngIf=\"!name.valid && (name.dirty || name.touched)\">\n\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"name.errors.required\">name is required</span>\n\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"name.errors.minlength\">name must be greater than 2 characters</span>\n\t\t\t\t</div>\n\n\t\t\t\t<span class=\"text-danger\" *ngIf=\"revMessages.name\">{{ revMessages.name }}</span>\n\t\t\t\t<span class=\"text-success\" *ngIf=\"revMessage\">{{ revMessage }}</span>\n\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label class=\"col-3\" path=\"name\">Your name:</label>\n\t\t\t\t\t<!-- <input type=\"text\" name=\"review.name\"  [(ngModel)]=\"review.name\" /> -->\n\t\t\t\t\t<input type=\"text\" required minlength=\"3\" name=\"review.name\" #name=\"ngModel\" [(ngModel)]=\"review.name\" />\n\t\t\t\t</div>\n\n\t\t\t\t<span class=\"text-danger\" *ngIf=\"revMessages.rating\">{{ revMessages.rating }}</span>\n\t\t\t\t<span class=\"text-success\" *ngIf=\"message\">{{ revMessage }}</span>\n\n\t\t\t\t\n\t\t\t\t\t<div class=\"form-group col-6\">\n\t\t\t\t\t\t<label for=\"rating\">Stars:</label>\n\t\t\t\t\t\t<select class=\"form-control\" id=\"rating\" name=\"review.rating\" [(ngModel)]=\"review.rating\">\n\t\t\t\t\t\t\t<option value=\"1\">1 star</option>\n\t\t\t\t\t\t\t<option value=\"2\">2 stars</option>\n\t\t\t\t\t\t\t<option value=\"3\">3 stars</option>\n\t\t\t\t\t\t\t<option value=\"4\">4 stars</option>\n\t\t\t\t\t\t\t<option value=\"5\">5 stars</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"!comment.valid && (comment.dirty || comment.touched)\">\n\t\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"comment.errors.required\">comment is required</span>\n\t\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"comment.errors.minlength\">comment must be greater than 2 characters</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"revMessages.comment\">{{ revMessages.comment }}</span>\n\t\t\t\t\t<span class=\"text-success\" *ngIf=\"revMessage\">{{ revMessage }}</span>\n\n\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t<label class=\"col-3\">Your review:</label>\n\t\t\t\t\t\t<input type=\"text\" required minlength=\"3\" name=\"review.comment\" #comment=\"ngModel\" [(ngModel)]=\"review.comment\"/>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- <input class=\"btn btn-primary btn-sm\" type=\"submit\" value=\"Submit\" /> -->\n\t\t\t\t\t<input [disabled]=\"!comment.valid\" class=\"btn btn-primary btn-sm\" type=\"submit\" value=\"Submit\"/>\n\t\t\t\t\t<a (click)=\"showReviewsPage(movie._id)\" class=\"btn btn-primary btn-sm\" >Cancel</a>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/reviews/reviews.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reviews/reviews.component.ts ***!
  \**********************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.review = { title: "", name: "", initReview: "" };
        this.review = { name: "", comment: "", rating: 0 };
        this.messages = [""];
        this.revMessages = [""];
        this._route.params.subscribe(function (params) {
            console.log("1 ngOnInit.  _route.params = ", JSON.stringify(params));
            console.log("2 ngOnInit.  params['id'] = ", params['id']);
            console.log("3 calling this.getMovie()");
            _this.getMovie(params['id']);
            _this.id = params.id;
            console.log("4 reviews.c.ts onInit() route params subscribe method. this.id= ", _this.id);
        });
        this._route.parent.params.subscribe(function (params) { return console.log("5 reviews.c.ts ngOnInit The parent params:", JSON.stringify(params)); });
        console.log("6 reviews.c.ts ngOnInit this.id = ", this.id);
        this.getMovie(this.id);
        //	this.showReviews(this.id);
    };
    ReviewsComponent.prototype.getMovie = function (id) {
        var _this = this;
        console.log("10 in reviews.c.ts getMovie()");
        var movie = this._httpService.getMovie(id);
        movie.subscribe(function (data) {
            console.log("11 reviews.c.ts getMovie. post response  data = ", data);
            _this.movie = data['data'];
            console.log("12 reviews.c.ts getMovie.  this.movie = ", _this.movie);
        });
    };
    ReviewsComponent.prototype.createReview = function () {
        var _this = this;
        console.log("20 in reviews.c.ts createReview(). this.id= ", this.id);
        var rev = this._httpService.createReview({ "id": this.id, "review": this.review });
        rev.subscribe(function (response) {
            console.log("21 reviews.c.ts createReview. post response  data = ", response);
            if (response['status'] == false) {
                _this.revMessages = response['revMessages'];
            }
            else {
                if (response['status'] == true) {
                    _this.message = response['message'];
                    _this.showReviewsPage(_this.id);
                }
            }
            //	this.review = {name: "", comment: "", rating: 0};
        });
    };
    ReviewsComponent.prototype.showReviewsPage = function (id) {
        console.log("30 reviews.c.ts in showReviewsPage method");
        this._router.navigate(['/showreviews/' + id]);
    };
    ReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.css */ "./src/app/reviews/reviews.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/show/show.component.css":
/*!*****************************************!*\
  !*** ./src/app/show/show.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n\tcolor: white !important;\r\n}"

/***/ }),

/***/ "./src/app/show/show.component.html":
/*!******************************************!*\
  !*** ./src/app/show/show.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col\">\n\t\t<button (click)=\"appAdd=!appAdd\" class=\"btn btn-primary btn-sm m-3\">Add a new movie</button>\n\t\t<app-add *ngIf=\"appAdd\"></app-add>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col m-3 \">\n\t\t<h4>Movie List:</h4>\n\t</div>\n</div>\n\n<div class=\"row m-2\">\n\t<div class=\"col\">\n\t\t<table class=\"table table-striped\">\n\t\t\t<thead>\n\t\t\t\t<th scope=\"col\">Movie Title</th>\n\t\t\t\t<th scope=\"col\">Average Rating</th>\n      \t\t\t<th scope=\"col\">Actions</th>\n\t\t\t\t\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<!-- <tr>\n\t\t\t\t\t<td>Movie Title:</td>\n\t\t\t\t\t<td>Actions:</td>\n\t\t\t\t</tr> -->\n\t\t\t\t<tr *ngFor=\"let movie of movies\">\n\t\t\t\t\t<td class=\"mr-3\">{{movie[\"title\"]}}</td><td class=\"mr-3\">{{movie[\"avgRating\"]}}</td><td><button (click)=\"showReviews(movie._id)\" class=\"btn btn-primary btn-sm m-x-2\">Read Reviews</button><button (click)=\"showWriteReview(movie._id)\" class=\"btn btn-primary btn-sm\">Write Review</button>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/show/show.component.ts":
/*!****************************************!*\
  !*** ./src/app/show/show.component.ts ***!
  \****************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowComponent = /** @class */ (function () {
    function ShowComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    ShowComponent.prototype.ngOnInit = function () {
        this.selectedMovie = "";
        this._route.params.subscribe(function (params) {
            //	console.log(params['id']);
        });
        this.appAdd = false;
        this.showMovies();
    };
    ShowComponent.prototype.goHome = function () {
        this._router.navigate(['/']);
    };
    ShowComponent.prototype.functionFromChild = function (eventData) {
        console.log("100 show.c.ts dataFromChild.  eventData = ", eventData);
        this.appAdd = eventData;
        this.ngOnInit();
    };
    //	showMovie(id: String){
    ShowComponent.prototype.showMovie = function (id) {
        var _this = this;
        //	console.log("in show.c.ts movieToShow.  id = ",id)
        var movie = this._httpService.getMovie(id);
        movie.subscribe(function (data) {
            _this.movie = data['data'];
            //	console.log("this.movieToShow.title = ",this.selectedMovie.title)
        });
    };
    ShowComponent.prototype.showMovies = function () {
        var _this = this;
        console.log("155 show.c.ts showMovies(). appAdd = ", this.appAdd);
        var movies = this._httpService.getAllMovies();
        movies.subscribe(function (data) {
            //	console.log("show.c.ts showMovies. post response  data = ",data)
            _this.movies = data['movies'];
            //	console.log("show.c.ts showMovies.  this.movies = ",this.movies)
            for (var i = 0; i < _this.movies.length; i++) {
                var avgRating = 0;
                var sum = 0;
                var numRevs = 0;
                var revVal = 0;
                //		console.log("i = ",i," this.movies[i].title = ",this.movies[i].title);
                numRevs = _this.movies[i].reviews.length;
                //		console.log("numRevs = this.movies[i].reviews.length-1 = ",numRevs);
                if (numRevs > 0) {
                    for (var j = 0; j < numRevs; j++) {
                        revVal = _this.movies[i].reviews[j].rating;
                        //				console.log("revVal = ",revVal);
                        sum += revVal;
                        //				console.log("j = ",j," sum = ",sum);
                    }
                    avgRating = sum / numRevs;
                    //			console.log("avgRating = ",avgRating);
                }
                else {
                    avgRating = 0;
                }
                _this.movies[i].avgRating = avgRating;
                //		console.log("this.movies[i].avgRating = ",this.movies[i].avgRating);
                //		console.log("final avgRating for ",this.movies[i].title," = ",avgRating);
                sum = 0;
                avgRating = 0;
            }
            //	console.log('this.movies = ',this.movies)
        });
    };
    ShowComponent.prototype.showAddMovie = function () {
        // this._router.navigate(['/add']);
        this.appAdd = true;
    };
    ShowComponent.prototype.showReviews = function (id) {
        this.showMovie(id);
        this._router.navigate(['/showreviews/' + id]);
    };
    ShowComponent.prototype.showWriteReview = function (id) {
        //	console.log("show.c.ts passed id = ",id)
        this._router.navigate(['/reviews/' + id]);
    };
    ShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show',
            template: __webpack_require__(/*! ./show.component.html */ "./src/app/show/show.component.html"),
            styles: [__webpack_require__(/*! ./show.component.css */ "./src/app/show/show.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ShowComponent);
    return ShowComponent;
}());



/***/ }),

/***/ "./src/app/showreviews/showreviews.component.css":
/*!*******************************************************!*\
  !*** ./src/app/showreviews/showreviews.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n\tcolor: white !important;\r\n}"

/***/ }),

/***/ "./src/app/showreviews/showreviews.component.html":
/*!********************************************************!*\
  !*** ./src/app/showreviews/showreviews.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col m-3 \">\n\t\t<button (click)=\"deleteMovie(movie._id)\" class=\"btn btn-danger btn-sm m-3\">Delete Movie</button>\n\t\t<button (click)=\"showMovies()\" class=\"btn btn-primary btn-sm m-3\">Show Movies</button>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col m-3 \">\n\t\t<h4>Reviews for {{movie.title}}</h4>\n\t</div>\n</div>\n\n<div class=\"row m-2\">\n\t<div class=\"col\">\n\t\t<table class=\"table table-striped\">\n\t\t\t<thead>\n\t\t\t\t<th scope=\"col\">Reviewer</th>\n      \t\t\t<th scope=\"col\">Stars</th>\n      \t\t\t<th scope=\"col\">Reviews</th>\n\t\t\t\t\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let review of reviews\">\n\t\t\t\t\t<td class=\"mr-4\">{{review[\"name\"]}}</td><td class=\"mr-2\">{{review[\"rating\"]}}</td><td class=\"mr-6\">{{review[\"comment\"]}}</td><td><button (click)=\"deleteReview(movie._id, review._id)\" class=\"btn btn-primary btn-sm m-x-2\">Delete</button>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/showreviews/showreviews.component.ts":
/*!******************************************************!*\
  !*** ./src/app/showreviews/showreviews.component.ts ***!
  \******************************************************/
/*! exports provided: ShowreviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowreviewsComponent", function() { return ShowreviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowreviewsComponent = /** @class */ (function () {
    function ShowreviewsComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    ShowreviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.review = { name: "", comment: "", rating: 0 };
        this.movie = { title: "", name: "" };
        this._route.params.subscribe(function (params) {
            console.log("30 showrevs onInit params[id] = ", params['id']);
            _this.id = params.id;
        });
        //	console.log("40 showrevs.c.ts ngOnInit b4 getMovie.  this.id = ",this.id)
        this.getMovie(this.id);
        this.showReviews(this.id);
    };
    ShowreviewsComponent.prototype.showReviews = function (id) {
        //	console.log("50 showrevs.c.ts showReviews(). id = ",id);
        var _this = this;
        var title = this._httpService.getMovie(id);
        title.subscribe(function (movie) {
            console.log("55 showrevs.c.ts showRevs getMovie.  movie = ", movie);
            console.log("56 showrevs.c.ts showRevs getMovie.  movie['data']['reviews'] = ", movie['data']['reviews']);
            _this.reviews = movie['data']['reviews'];
        });
    };
    ShowreviewsComponent.prototype.showMovies = function () {
        console.log("60 showreviews.c.ts showMovies(). nav to /show");
        this._router.navigate(['/show']);
    };
    ShowreviewsComponent.prototype.getMovie = function (id) {
        var _this = this;
        console.log("70 showreviews.c.ts getMovie(). id = ", id);
        var movie = this._httpService.getMovie(id);
        movie.subscribe(function (data) {
            console.log("71 showrevs.c.ts getMovie(). post response  data = ", data);
            _this.movie = data['data'];
            console.log("72 showrevs.c.ts getMovie().  this.movie = ", _this.movie);
        });
    };
    ShowreviewsComponent.prototype.deleteMovie = function (id) {
        var _this = this;
        console.log("75 showreviews.c.ts deleteMovie(). id = ", id);
        var movie = this._httpService.deleteMovie(id);
        movie.subscribe(function (data) {
            console.log("75 showrevs.c.ts deleteMovie(). post response  data = ", data);
            // this.movie = data['data'];
            // console.log("75 showrevs.c.ts deleteMovie().  this.movie = ",this.movie)
            _this.showMovies();
        });
    };
    ShowreviewsComponent.prototype.deleteReview = function (movieId, reviewId) {
        var _this = this;
        console.log("80 showreviews.c.ts deleteReview(). reviewId = ", reviewId, " movieId = ", movieId);
        var delRev = this._httpService.deleteReview(movieId, reviewId);
        delRev.subscribe(function (data) {
            console.log("75 showrevs.c.ts deleteReview(). post response  data = ", data);
            // this.movie = data['data'];
            // console.log("75 showrevs.c.ts deleteReview().  this.movie = ",this.movie)
            _this.showReviews(movieId);
        });
    };
    ShowreviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showreviews',
            template: __webpack_require__(/*! ./showreviews.component.html */ "./src/app/showreviews/showreviews.component.html"),
            styles: [__webpack_require__(/*! ./showreviews.component.css */ "./src/app/showreviews/showreviews.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ShowreviewsComponent);
    return ShowreviewsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AA_local_Code\MEAN\mongo\ang_authors\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map