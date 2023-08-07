import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { PokeList, Pokemon } from '../model/pokemon';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: Pokemon[] = [];
  public getAllPokemons: Pokemon[] = [];

  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe({
      next: (res) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        this.apiError = true;
      },
      error: (error) => {
        this.apiError = true;
      },
    });
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }
}
