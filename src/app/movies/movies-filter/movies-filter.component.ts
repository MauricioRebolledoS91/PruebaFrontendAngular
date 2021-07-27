import { Component, OnInit } from '@angular/core';
import { PeliculaDto } from '../movies-dto/movie';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesService } from '../movies-service/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})
export class MoviesFilterComponent implements OnInit {

    form: FormGroup;
    peliculas: PeliculaDto[];

  constructor(private formBuilder: FormBuilder,
              private moviesService: MoviesService,
              private activateRoute: ActivatedRoute,
              private location: Location) { }

              formularioOriginal = {
                title: '',
                betterRated: false,
                morePopulars: false
              }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);

    this.form.valueChanges
      .subscribe(valores => {
        this.buscarPeliculas(valores);
        this.escribirParametrosBusquedaEnUrl();
      })
    }
    

  private leerValoresURL(){
    this.activateRoute.queryParams.subscribe((params) => {
      var objeto: any = {};

        if(params.title){
          objeto.title = params.title;
        }
       if(params.betterRated){
          objeto.betterRated = params.betterRated;
        }
       if(params.morePopulars){
          objeto.morePopulars = params.morePopulars;
        }
        this.form.patchValue(objeto);
    });
  }

  private escribirParametrosBusquedaEnUrl(){
    var queryStrings = [];

    var valoresFormulario = this.form.value;

    if(valoresFormulario.titulo){
      queryStrings.push(`title=${valoresFormulario.title}`);
    }
   if(valoresFormulario.proximosEstrenos){
      queryStrings.push(`betterRated=${valoresFormulario.betterRated}`);
    }
   if(valoresFormulario.enCines){
      queryStrings.push(`morePopulars=${valoresFormulario.morePopulars}`);
    }

    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));
  }

  buscarPeliculas(valores: any){   
    this.moviesService.filter(valores)
      .subscribe(response => {
        this.peliculas = response.body;
        this.escribirParametrosBusquedaEnUrl();
      });
  }

}
