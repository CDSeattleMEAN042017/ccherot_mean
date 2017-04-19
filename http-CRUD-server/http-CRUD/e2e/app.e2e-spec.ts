import { HttpCRUDPage } from './app.po';

describe('http-crud App', function() {
  let page: HttpCRUDPage;

  beforeEach(() => {
    page = new HttpCRUDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
