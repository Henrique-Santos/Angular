import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { UserService } from './../user/user.service';
import { FooterComponent } from './footer.component';

describe('O componente Footer', () => {
    let component: FooterComponent

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent],
            imports: [RouterTestingModule],
            providers: [UserService]
        }).compileComponents()
    }))

    beforeEach(() => {
        const userService = TestBed.inject(UserService)

        spyOn(userService, 'getUser').and.returnValue(
            of({
                email: 'henrique@mail.com',
                name: 'Henrique',
                id: 1
            })
        )

        const fixture = TestBed.createComponent(FooterComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    }) 

    it('Deve ser instanciado', () => {
        expect(component).toBeTruthy()
    })
})