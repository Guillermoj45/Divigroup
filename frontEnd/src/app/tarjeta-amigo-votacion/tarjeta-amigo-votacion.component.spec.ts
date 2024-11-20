import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TarjetaAmigoVotacionComponent } from './tarjeta-amigo-votacion.component';

describe('TarjetaAmigoVotacionComponent', () => {
  let component: TarjetaAmigoVotacionComponent;
  let fixture: ComponentFixture<TarjetaAmigoVotacionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TarjetaAmigoVotacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaAmigoVotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
