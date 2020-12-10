import { TokenService } from './token.service';

describe('O serviço TokenService', () => {
    it('Deve ser instanciado', () => {
        const service = new TokenService()
        expect(service).toBeTruthy()
    })

    it('Deve guardar um token', () => {
        const token = 'testetoken'
        const service = new TokenService()
        service.setToken(token)
        expect(service.hasToken()).toBeTruthy()
        expect(service.getToken()).toBe('testetoken')
    })
})