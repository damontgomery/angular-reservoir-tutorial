import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {
  searchUrl: string = 'http://local.well.com/jsonapi/node/hero';

  constructor(
    private http: Http
  ) { }

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`${this.searchUrl}?filter[title][operator]=CONTAINS&filter[title][value]=${term}`)
      .map(res => {
        var heroes: Hero[] = [];
        var data = res.json().data;

        heroes = data.map(source => {
          var hero: Hero = new Hero;
          hero.id = source.id;
          hero.name = source.attributes.title;

          return hero;
        });

        return heroes;
      });
  }
}
