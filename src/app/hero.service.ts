import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  // private heroesUrl: string = 'api/heroes';
  private heroesUrl: string = 'http://local.well.com/jsonapi/node/hero';

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES);
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => {
        var heroes: Hero[] = [];
        var data = response.json().data;

        heroes = data.map(source => {
          var hero: Hero = new Hero;
          hero.id = source.id;
          hero.name = source.attributes.title;

          return hero;
        });

        return heroes;
      })
      .catch(this.handleError);
  }

  getHero(id: string): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => {
        var hero: Hero = new Hero;
        var data = response.json().data;

        hero.id = data.id;
        hero.name = data.attributes.title;

        return hero;
      })
      .catch(this.handleError);

    // return this.getHeroes()
    //   .then(heroes => heroes.find(hero => hero.id === id));
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Hero)
        .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  delete(hero: Hero): Promise<void> {
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
