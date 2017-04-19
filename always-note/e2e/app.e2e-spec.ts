import { AlwaysNotePage } from './app.po';

describe('always-note App', function() {
  let page: AlwaysNotePage;

  beforeEach(() => {
    page = new AlwaysNotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
