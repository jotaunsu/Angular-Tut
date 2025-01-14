import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionConclusionesComponent } from './seccion-conclusiones.component';

describe('SeccionConclusionesComponent', () => {
  let component: SeccionConclusionesComponent;
  let fixture: ComponentFixture<SeccionConclusionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionConclusionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionConclusionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
