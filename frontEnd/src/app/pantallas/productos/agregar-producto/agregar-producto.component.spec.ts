import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AgregarProductoComponent} from './agregar-producto.component';

describe('AgregarProductoComponent', () => {
    let component: AgregarProductoComponent;
    let fixture: ComponentFixture<AgregarProductoComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [AgregarProductoComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AgregarProductoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
