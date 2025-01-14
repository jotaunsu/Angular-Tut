import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionUtilizacionComponent } from './seccion-utilizacion.component';

describe('SeccionUtilizacionComponent', () => {
  let component: SeccionUtilizacionComponent;
  let fixture: ComponentFixture<SeccionUtilizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionUtilizacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionUtilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
