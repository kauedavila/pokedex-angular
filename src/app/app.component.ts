import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PokemonService } from './services/pokemon/pokemon.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PokeListComponent,
    HttpClientModule,
    PaginationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pokedex-angular';

  ngOnInit() {
    this.getPokeList();
  }

  constructor(private pokemonService: PokemonService) {}

  pokemonList$: Observable<any> = new Observable<any>();
  total$: Observable<any> = new Observable<any>();
  page: number = 1;
  offset: number = 0;
  data: any = undefined;

  getPokeList() {
    this.data = this.pokemonService.getPokemons(this.offset);

    this.data.subscribe((response: any) => {
      return (this.total$ = response.count);
    });

    this.pokemonList$ = this.data.pipe(
      map((response: any) => response.results)
    );
  }

  onPageChange(page: number) {
    this.offset = (page - 1) * 64;
    this.getPokeList();
  }
}
