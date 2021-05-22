import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastSimpleTestFormComponent } from './past-simple-test-form.component';

describe('PastSimpleTestFormComponent', () => {
  let component: PastSimpleTestFormComponent;
  let fixture: ComponentFixture<PastSimpleTestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastSimpleTestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastSimpleTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
