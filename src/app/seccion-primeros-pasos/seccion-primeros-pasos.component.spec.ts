import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPrimerosPasosComponent } from './seccion-primeros-pasos.component';

describe('SeccionPrimerosPasosComponent', () => {
  let component: SeccionPrimerosPasosComponent;
  let fixture: ComponentFixture<SeccionPrimerosPasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionPrimerosPasosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionPrimerosPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
