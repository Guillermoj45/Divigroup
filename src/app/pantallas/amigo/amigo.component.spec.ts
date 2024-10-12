import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AmigoComponent } from './amigo.component';

describe('AmigoComponent', () => {
  let component: AmigoComponent;
  let fixture: ComponentFixture<AmigoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AmigoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AmigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
