import { browser } from 'protractor';

export class SigninPage {

    acessarHome() {
        return browser.get('')
    }

    verificarUrl() {
        return browser.getCurrentUrl()
    }
    
}