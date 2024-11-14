import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {TajetaCuentaComponent} from './tajeta-cuenta.component';

describe('TajetaCuentaComponent', () => {
    let component: TajetaCuentaComponent;
    let fixture: ComponentFixture<TajetaCuentaComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [TajetaCuentaComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TajetaCuentaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
