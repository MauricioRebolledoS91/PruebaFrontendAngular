import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaDto } from '../movies-dto/movie';
import { MoviesService } from '../movies-service/movies.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  pelicula: PeliculaDto;

  constructor(private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.moviesService.filterForId(params.id).subscribe(pelicula => {
        console.log(pelicula);
        this.pelicula = pelicula;
        });
      })
    }
  }


