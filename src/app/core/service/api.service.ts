import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Media, PaginatedResponse } from '../interface/media';
import { Observable } from 'rxjs';
import { Tv } from '../interface/tv';
import { People } from '../interface/people';
import { Movie } from '../interface/movie';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  _httpClient = inject(HttpClient);
  private readonly baseUrl = 'https://api.themoviedb.org/3';

  getTrending(timeWindow: 'day' | 'week' = 'day'): Observable<any> {
    return this._httpClient.get<PaginatedResponse<Media>>(
      `${this.baseUrl}/trending/all/${timeWindow}`
    );
  }

  getMovies(timeWindow: 'day' | 'week' = 'day'): Observable<any> {
    return this._httpClient.get<PaginatedResponse<Movie>>(
      `${this.baseUrl}/trending/movie/${timeWindow}?language=en-US`
    );
  }

  getPeople(timeWindow: 'day' | 'week' = 'day'): Observable<any> {
    return this._httpClient.get<PaginatedResponse<People>>(
      `${this.baseUrl}/trending/person/${timeWindow}?language=en-US`
    );
  }

  getTV(timeWindow: 'day' | 'week' = 'day'): Observable<any> {
    return this._httpClient.get<PaginatedResponse<Tv>>(
      `${this.baseUrl}/trending/tv/${timeWindow}?language=en-US`
    );
  }

  getDetails(type: string, id: string): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/${type}/${id}?language=en-US`
    );
  }
}
