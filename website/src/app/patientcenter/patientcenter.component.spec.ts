import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientcenterComponent } from './patientcenter.component';

describe('PatientcenterComponent', () => {
  let component: PatientcenterComponent;
  let fixture: ComponentFixture<PatientcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
