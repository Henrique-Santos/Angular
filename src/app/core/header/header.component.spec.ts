import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { AlertModule } from './../../shared/alert/alert.module';
import { HeaderComponent } from './header.component';
import { UserService } from './../user/user.service';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';

describe('O componente Header', () => {
    let component: HeaderComponent
    let userService: UserService
    let router: Router

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [
                RouterTestingModule.withRoutes([]), 
                MenuModule, 
                AlertModule, 
                LoadingModule
            ],
            providers: [UserService]
        }).compileComponents()
    }))

    beforeEach(() => {
        userService = TestBed.inject(UserService)
        router = TestBed.inject(Router)
        spyOn(userService, 'getUser').and.returnValue(
            of({
                name: 'Henrique',
                email: 'henrique@mail.com',
                id: 1
            })
        )

        const fixture = TestBed.createComponent(HeaderComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('Deve ser instanciado', () => {
        expect(component).toBeTruthy()
    })

    it('Deve realizar o logout', () => {
        const spy = spyOn(userService, 'logout').and.returnValue(null)
        const navigateSpy = spyOn(router, 'navigate')
        component.logout()
        expect(spy).toHaveBeenCalled()
        expect(navigateSpy).toHaveBeenCalledWith([''])
    })
})