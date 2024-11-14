import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {MiniMenuImgsComponent} from './mini-menu-imgs.component';

describe('MiniMenuImgsComponent', () => {
    let component: MiniMenuImgsComponent;
    let fixture: ComponentFixture<MiniMenuImgsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [MiniMenuImgsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MiniMenuImgsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
