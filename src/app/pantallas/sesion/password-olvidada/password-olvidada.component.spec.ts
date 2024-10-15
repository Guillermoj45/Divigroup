import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PasswordOlvidadaComponent } from './password-olvidada.component';

describe('PasswordOlvidadaComponent', () => {
  let component: PasswordOlvidadaComponent;
  let fixture: ComponentFixture<PasswordOlvidadaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PasswordOlvidadaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordOlvidadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
