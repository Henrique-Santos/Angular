import { RouterTestingModule } from '@angular/router/testing';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { SignUpService } from './signup.service';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, waitForAsync, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './signup.component';

describe('O formulário SignUp', () => {
    let component: SignUpComponent

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [SignUpComponent],
            imports: [
                HttpClientTestingModule,
                VMessageModule,
                ReactiveFormsModule,
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                SignUpService,
                UserNotTakenValidatorService
            ]
        }).compileComponents()
    }))

    beforeEach(() => {
        const fixture = TestBed.createComponent(SignUpComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('Deve ser instanciado', () => {
        expect(component).toBeTruthy()
    })
})