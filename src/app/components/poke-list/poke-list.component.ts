import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { PokeCardComponent } from '../../poke-card/poke-card.component';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [NgFor, CommonModule, PokeCardComponent],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css',
})
export class PokeListComponent {
  @Input() pokemonList$: any = null;
  @Input() page: number = 0;
}
