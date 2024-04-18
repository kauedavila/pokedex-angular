import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [],
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.css',
})
export class PokeCardComponent {
  @Input() pokemon: any;

  pokeName = '';
  pokeId = '';

  ngOnInit() {
    this.pokeName = this.pokemon.name;
    this.pokeId = this.pokemon.url.split('/')[6];
    console.log(this.pokeId);
  }
}
