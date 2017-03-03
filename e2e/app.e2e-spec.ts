import { MytutsPage } from './app.po';

describe('mytuts App', function() {
  let page: MytutsPage;

  beforeEach(() => {
    page = new MytutsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
