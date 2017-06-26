import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

// Use OAuth.
import { OAuthService } from 'angular-oauth2-oidc';
import { User } from './user';
import { MOCKUSER } from './mock-user';

@Injectable()
export class HeroService {
  private heroesUrl: string = 'http://local.well.com/jsonapi/node/hero';
  private headers = new Headers({'Content-Type': 'application/vnd.api+json'});

  // For now we're just going to hard code the user object.
  user: User = MOCKUSER;

  constructor(
    private http: Http,
    private oauthService: OAuthService
  ) {
    this.oauthService.clientId = 'd7fca026-1619-400b-92f3-de46c82a6fa9';
    this.oauthService.tokenEndpoint = 'http://local.well.com/oauth/token';
    this.oauthService.dummyClientSecret = 'password';

    this.oauthService.setStorage(sessionStorage);

    this.oauthService.fetchTokenUsingPasswordFlow(this.user.name, this.user.password)
      .then((resp) => {
        // Set the header to use the access token.
        this.headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
      });
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(res => {
        var heroes: Hero[] = [];
        var data = res.json().data;

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
      .then(res => {
        var hero: Hero = new Hero;
        var data = res.json().data;

        hero.id = data.id;
        hero.name = data.attributes.title;

        return hero;
      })
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    let createdHero =   {
      data: {
        attributes: {
          langcode: "en",
          status: true,
          title: name,
        }
      }
    };

    return this.http
      .post(this.heroesUrl, JSON.stringify(createdHero), {headers: this.headers})
        .toPromise()
        .then(res => {
          let hero: Hero = new Hero;
          let data = res.json().data;

          hero.id = data.id;
          hero.name = data.attributes.title;

          return hero;
        })
        .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;

    let updatedHero =   {
      data: {
        id: hero.id,
        attributes: {
          // We are only going to update the name.
          title: hero.name,
        }
      }
    };

    return this.http
      .patch(url, JSON.stringify(updatedHero), {headers: this.headers})
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
