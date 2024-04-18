import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Observable, map } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css',
})
export class PokeListComponent {
  constructor(private pokemonService: PokemonService) {}

  pokemonList$: Observable<any> = new Observable<any>();

  ngOnInit() {
    this.pokemonList$ = this.pokemonService
      .getPokemons()
      .pipe(map((response) => response.results));
  }
}
