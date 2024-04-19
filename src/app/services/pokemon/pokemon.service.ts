import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemons(offset: number = 0): Observable<any> {
    const url = `${this.apiUrl}pokemon?offset=${offset}&limit=64`;
    return this.http.get(url);
  }
}
