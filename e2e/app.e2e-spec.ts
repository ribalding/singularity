import { SingularityPage } from './app.po';

describe('singularity App', function() {
  let page: SingularityPage;

  beforeEach(() => {
    page = new SingularityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
