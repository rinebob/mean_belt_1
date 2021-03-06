import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReviewComponent } from './review/review.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShowreviewsComponent } from './showreviews/showreviews.component';

const routes: Routes = [
	{ path: '', component: ShowComponent },
	{ path: 'show', component: ShowComponent },
	{ path: 'reviews/:id', component: ReviewsComponent },
	{ path: 'add', component: AddComponent },
	{ path: 'edit', component: EditComponent },
	{ path: 'review', component: ReviewComponent },
	{ path: 'showreviews/:id', component: ShowreviewsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
