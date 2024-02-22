import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../types/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.potterdb.com/v1/movies';
  constructor(private http: HttpClient) {}

  getMovies(): Observable<{ data: Movie[] }> {
    return this.http.get<{ data: Movie[] }>(this.apiUrl);
  }
}
