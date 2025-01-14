import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionFuncionamientoComponent } from './seccion-funcionamiento.component';

describe('SeccionFuncionamientoComponent', () => {
  let component: SeccionFuncionamientoComponent;
  let fixture: ComponentFixture<SeccionFuncionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionFuncionamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionFuncionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
