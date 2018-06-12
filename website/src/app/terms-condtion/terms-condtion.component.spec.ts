import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsCondtionComponent } from './terms-condtion.component';

describe('TermsCondtionComponent', () => {
  let component: TermsCondtionComponent;
  let fixture: ComponentFixture<TermsCondtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsCondtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsCondtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
