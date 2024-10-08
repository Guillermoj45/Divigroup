import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuTarjetaAmigosComponent } from './menu-tarjeta-amigos.component';

describe('MenuTarjetaAmigosComponent', () => {
  let component: MenuTarjetaAmigosComponent;
  let fixture: ComponentFixture<MenuTarjetaAmigosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MenuTarjetaAmigosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuTarjetaAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
