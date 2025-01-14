import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionInstalacionComponent } from './seccion-instalacion.component';

describe('SeccionInstalacionComponent', () => {
  let component: SeccionInstalacionComponent;
  let fixture: ComponentFixture<SeccionInstalacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionInstalacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionInstalacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
