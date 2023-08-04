import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { PokeList, Pokemon, Status } from '../shared/model/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(private http: HttpClient) {}

  get apiListAllPokemons(): Observable<PokeList> {
    return this.http.get<PokeList>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((resPokemons: Pokemon) => {
          this.apiGetPokemons(resPokemons.url).subscribe({
            next: (res) => (resPokemons.status = res),
          });
        });
      })
    );
  }

  public apiGetPokemons(url: string): Observable<Status> {
    return this.http.get<Status>(url).pipe(map((res) => res));
  }
}
