import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LandingPageDTO, PeliculaDto } from '../movies-dto/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiURL = environment.apiURL + 'movies';

  constructor(private http: HttpClient) { }

  public getLatestMovies() : Observable<LandingPageDTO> {
    return this.http.get<LandingPageDTO>(`${this.apiURL}/latestMovies`);
  }

  public filter(valores: any): Observable<any> {
    const params = new HttpParams({fromObject: valores});
    return this.http.get<PeliculaDto[]>(`${this.apiURL}/filter`, 
    {params, observe: 'response'});
  }

  public filterForId(id: number): Observable<PeliculaDto> {
    return this.http.get<PeliculaDto>(`${this.apiURL}/filter/${id}`)
  }
}
