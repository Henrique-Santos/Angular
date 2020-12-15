import { AlertModule } from './../../shared/alert/alert.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { UserService } from './../user/user.service';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { of } from 'rxjs';

describe('O componente Header', () => {
    let component: HeaderComponent
    let userService: UserService

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
})