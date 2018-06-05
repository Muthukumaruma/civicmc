import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedlinkComponent } from './relatedlink.component';

describe('RelatedlinkComponent', () => {
  let component: RelatedlinkComponent;
  let fixture: ComponentFixture<RelatedlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
