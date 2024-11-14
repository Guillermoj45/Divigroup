import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {BotonAgregarComponent} from './boton-agregar.component';

describe('BotonAgregarComponent', () => {
    let component: BotonAgregarComponent;
    let fixture: ComponentFixture<BotonAgregarComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [BotonAgregarComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BotonAgregarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
