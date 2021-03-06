import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = environment.apiUrl;
const API_MOVIE_URL = 'api/movies/';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${API_URL + API_MOVIE_URL}${id}`);
  }

  createMovie(movie: Object): Observable<Object> {
    return this.http.post(`${API_URL + API_MOVIE_URL + 'add'}`, movie);
  }

  updateMovie(movie: Object): Observable<Object> {
    return this.http.put(`${API_URL + API_MOVIE_URL + 'edit'}`, movie);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${API_URL + API_MOVIE_URL + 'delete/'}${id}`);
  }

  getMovieList(): Observable<any> {
    return this.http.get(`${API_URL + API_MOVIE_URL + 'all'}`);
  }
}
