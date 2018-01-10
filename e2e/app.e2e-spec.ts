import { ResultatsFootballPage } from './app.po';

describe('resultats-football App', function() {
  let page: ResultatsFootballPage;

  beforeEach(() => {
    page = new ResultatsFootballPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
