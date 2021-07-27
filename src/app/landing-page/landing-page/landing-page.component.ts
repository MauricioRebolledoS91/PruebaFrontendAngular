import { Component, OnInit } from '@angular/core';
import { PeliculaDto } from 'src/app/movies/movies-dto/movie';
import { MoviesService } from 'src/app/movies/movies-service/movies.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  peliculasRecientes: PeliculaDto[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.moviesService.getLatestMovies().subscribe(landingPage => {
      this.peliculasRecientes = landingPage.latestMovies;
      console.log(this.peliculasRecientes);
    });
  }

}
