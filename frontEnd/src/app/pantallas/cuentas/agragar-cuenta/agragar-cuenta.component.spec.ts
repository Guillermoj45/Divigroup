import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AgragarCuentaComponent} from './agragar-cuenta.component';

describe('AgragarCuentaComponent', () => {
    let component: AgragarCuentaComponent;
    let fixture: ComponentFixture<AgragarCuentaComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [AgragarCuentaComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AgragarCuentaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
