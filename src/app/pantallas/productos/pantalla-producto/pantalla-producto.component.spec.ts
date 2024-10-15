import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PantallaProductoComponent } from './pantalla-producto.component';

describe('PantallaProductoComponent', () => {
  let component: PantallaProductoComponent;
  let fixture: ComponentFixture<PantallaProductoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PantallaProductoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PantallaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
