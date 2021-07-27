import { Component, Input, OnInit } from '@angular/core';
import { PeliculaDto } from '../movies-dto/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  @Input()
  public peliculas: PeliculaDto[];

 
  constructor() { }

  ngOnInit(): void {
    
  }

}
