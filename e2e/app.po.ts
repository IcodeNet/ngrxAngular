import { browser, element, by } from 'protractor';

export class NgrxAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('-myApp-root h1')).getText();
  }
}
