import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { MoviesFilterComponent } from './movies/movies-filter/movies-filter.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'movies/filter', component: MoviesFilterComponent},
  {path: 'movie/:id', component: MoviesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
