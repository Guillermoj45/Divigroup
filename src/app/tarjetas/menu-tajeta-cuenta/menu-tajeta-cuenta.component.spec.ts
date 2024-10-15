import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {MenuTajetaCuentaComponent} from './menu-tajeta-cuenta.component';

describe('MenuTajetaCuentaComponent', () => {
  let component: MenuTajetaCuentaComponent;
  let fixture: ComponentFixture<MenuTajetaCuentaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MenuTajetaCuentaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuTajetaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
