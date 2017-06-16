import { WebDesignPage } from './app.po';

describe('web-design App', () => {
  let page: WebDesignPage;

  beforeEach(() => {
    page = new WebDesignPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
