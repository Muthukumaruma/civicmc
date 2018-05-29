import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedservicesComponent } from './medservices.component';

describe('MedservicesComponent', () => {
  let component: MedservicesComponent;
  let fixture: ComponentFixture<MedservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
