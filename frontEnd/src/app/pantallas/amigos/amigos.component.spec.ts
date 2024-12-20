import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AmigosComponent} from './amigos.component';

describe('AmigosComponent', () => {
    let component: AmigosComponent;
    let fixture: ComponentFixture<AmigosComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [AmigosComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AmigosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
