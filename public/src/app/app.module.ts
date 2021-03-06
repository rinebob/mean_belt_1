import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReviewComponent } from './review/review.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShowreviewsComponent } from './showreviews/showreviews.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    AddComponent,
    EditComponent,
	ReviewComponent,
	ReviewsComponent,
	ShowreviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
