import { TestBed } from '@angular/core/testing';

import { TokenService } from './../token/token.service';
import { UserService } from './user.service'

describe('O serviço UserService', () => {
    let service: UserService
    let token

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService]
        })
        service = TestBed.inject(UserService)
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYwNzcxNzE0NCwiZXhwIjoxNjA3ODAzNTQ0fQ.PxlbeSX2HomBqQx4bkyqqNjStHY9c1rR1fJKVqlTEQg'
    })

    it('Deve ser instanciado', () => {
        expect(service).toBeTruthy()
    })

    it('Deve, através de um token, recuperar as informações do usuário', () => {
        service.setToken(token)
        expect(service.isLogged()).toBeTruthy()
        expect(service.getUserName()).toBe('flavio')
        service.getUser().subscribe(user => {
            expect(user.name).toBe('flavio')
        })
    })

    it('Deve limpar as informações no logout', () => {
        service.setToken(token)
        service.logout()
        expect(service.isLogged()).toBeFalsy()
    })
})