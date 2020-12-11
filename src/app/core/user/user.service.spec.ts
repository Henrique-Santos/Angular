import { TokenService } from './../token/token.service';
import { UserService } from './user.service'

describe('O serviço UserService', () => {
    let service: UserService

    beforeEach(() => {
        service = new UserService(new TokenService())
    })

    it('Deve ser instanciado', () => {
        expect(service).toBeTruthy()
    })

    it('Deve, através de um token, recuperar as informações do usuário', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYwNzcxNTAyMSwiZXhwIjoxNjA3ODAxNDIxfQ.b04dEvlSotpmNEZ1JMSrujPpP_PQO1INkq23o-KZh7s'
        service.setToken(token)
        expect(service.isLogged()).toBeTruthy()
        expect(service.getUserName()).toBe('flavio')
    })
})