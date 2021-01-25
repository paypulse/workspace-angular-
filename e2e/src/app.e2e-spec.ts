import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('workspace-angular app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  //hero-child, parent test code 
  const heroNames = ['Dr IQ', 'Magneta' , 'Bombasto'];
  const masterName = 'Master';

  it('should pass properties to children properly',() =>{
    const parent = element(by.tagname('app-hero-child'));
    const heroes = parent.all(by.tagName('app-hero-parent'));

    for(let i=0;i< heroNames.length;i++){
      const childTitle = heroes.get(i).element(by.tagName('h3')).getText();
      const childDetail = heroes.get(i).element(by.tagName('p')).getText();

      expect(childTitle)
      expect(childDetail).toContain(masterName);

    }

  });


});



