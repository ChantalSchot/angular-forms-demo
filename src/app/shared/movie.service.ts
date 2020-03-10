import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl: string = 'https://angular2020-a-team.azurewebsites.net/api'

  constructor(private httpClient: HttpClient) { }

  postNewMovie(movie: Movie): Observable<HttpResponse<Movie>> {
    const url = `${this.baseUrl}/Video`;
    const httpOptions = {
      headers: new HttpHeaders(
        {
        'Content-Type': 'application/json'
        }
      )
    };


    return this.httpClient.post<HttpResponse<Movie>>(
      url,
      JSON.stringify(movie),
      httpOptions)
  }
}
