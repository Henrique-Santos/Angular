import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('O serviço AuthService', () => {
  let service: AuthService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService]
    })
    service = TestBed.inject(AuthService)
  })

  it('Deve ser instanciado', () => {
    expect(service).toBeTruthy()
  })
})
