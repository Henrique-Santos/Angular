import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from 'src/app/core/user/user.service';
import { AuthService } from './auth.service';

describe('O serviço AuthService', () => {
  let service: AuthService
  let httpMock: HttpTestingController
  let userService: UserService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    })
    service = TestBed.inject(AuthService)
    httpMock = TestBed.inject(HttpTestingController)
    userService = TestBed.inject(UserService)
  })

  it('Deve ser instanciado', () => {
    expect(service).toBeTruthy()
  })

  it('Deve autenticar o usuário', fakeAsync(() => {
    const fakeBody = {
      id: 1,
      nome: 'henrique',
      email: 'henrique@mail.com'
    }

    const spy = spyOn(userService, 'setToken').and.returnValue(null)

    service.authenticate('henrique', '123').subscribe(response => {
      expect(response.body).toEqual(fakeBody)
      expect(spy).toHaveBeenCalledWith('tokenTest')
    })

    const request = httpMock.expectOne(req => {
      return req.method == 'POST'
    })

    request.flush(fakeBody, {
      headers: { 'x-access-token': 'tokenTest' }
    })

    tick()
  }))
})
