import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {TarjetaAmigosComponent} from './tarjeta-amigos.component';

describe('TarjetaAmigosComponent', () => {
  let component: TarjetaAmigosComponent;
  let fixture: ComponentFixture<TarjetaAmigosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TarjetaAmigosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
