import { AngularcliTourOfHeroesPage } from './app.po';

describe('angularcli-tour-of-heroes App', () => {
  let page: AngularcliTourOfHeroesPage;

  beforeEach(() => {
    page = new AngularcliTourOfHeroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
