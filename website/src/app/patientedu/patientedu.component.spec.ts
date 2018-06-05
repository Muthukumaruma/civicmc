import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienteduComponent } from './patientedu.component';

describe('PatienteduComponent', () => {
  let component: PatienteduComponent;
  let fixture: ComponentFixture<PatienteduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatienteduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatienteduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
