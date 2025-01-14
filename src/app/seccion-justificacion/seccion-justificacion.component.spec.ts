import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionJustificacionComponent } from './seccion-justificacion.component';

describe('SeccionJustificacionComponent', () => {
  let component: SeccionJustificacionComponent;
  let fixture: ComponentFixture<SeccionJustificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionJustificacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionJustificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
