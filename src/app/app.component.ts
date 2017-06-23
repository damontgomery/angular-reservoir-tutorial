import { Component } from '@angular/core';

// import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Title of page.
  title: string = 'Tour of Heroes';

  constructor(
    // private oauthService: OAuthService
  ) {

  }

  // selectedHero: Hero;
  //
  // // Maps to the event emitter in the hero list component.
  // handleHeroSelected(selectedHero: Hero) {
  //   this.selectedHero = selectedHero;
  // }
}
