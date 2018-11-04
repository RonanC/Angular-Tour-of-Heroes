import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService extends InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Tayo' },
      { id: 12, name: 'Plunker' },
      { id: 13, name: 'Spooker' },
      { id: 14, name: 'Puka' },
      { id: 15, name: 'Nasher' },
      { id: 16, name: 'Tayter' },
      { id: 17, name: 'Lou the Poo' },
      { id: 18, name: 'Tig the Pig' },
      { id: 19, name: 'My. Croc' },
      { id: 20, name: 'Destiny' }
    ];

    return { heroes };
  }

  genId(heroes: Hero[]): number {
    // get the max hero id and add one, if no heroes then return id 11
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
