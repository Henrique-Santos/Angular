import { SigninPage } from './signin.po';

describe('Testando tela home', () => {
    let signinPage: SigninPage

    beforeEach(() => {
        signinPage = new SigninPage()
    })

    it('Deve ir para home', () => {
        signinPage.acessarHome()
    })

    it('Deve verificar a url', () => {
        expect(signinPage.verificarUrl()).toBe('http://localhost:4200/#/home')
    })
})