import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

// Services
import { HeroService }          from './hero.service';
import { HeroSearchService }    from './hero-search.service';

// Additional core modules
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

// Routing module
import { AppRoutingModule }     from './app-routing/app-routing.module';

// OAuthService
// import { OAuthModule }          from 'angular-oauth2-oidc';
// import { OAuthService }          from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    // OAuthModule.forRoot(),
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    HeroService,
    HeroSearchService,
    // OAuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
