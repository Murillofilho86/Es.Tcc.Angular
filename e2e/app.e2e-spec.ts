import { ProjetoTccTemplatePage } from './app.po';

describe('ProjetoTcc App', function() {
  let page: ProjetoTccTemplatePage;

  beforeEach(() => {
    page = new ProjetoTccTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
