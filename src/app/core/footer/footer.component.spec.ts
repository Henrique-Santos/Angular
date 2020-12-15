import { TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('O componente Footer', () => {
    let component: FooterComponent

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent]
        })

        const fixture = TestBed.createComponent(FooterComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    }) 

    it('Deve ser instanciado', () => {
        expect(component).toBeTruthy()
    })
})