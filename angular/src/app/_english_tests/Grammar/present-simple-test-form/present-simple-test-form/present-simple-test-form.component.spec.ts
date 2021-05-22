import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentSimpleTestFormComponent } from './present-simple-test-form.component';

describe('PresentSimpleTestFormComponent', () => {
  let component: PresentSimpleTestFormComponent;
  let fixture: ComponentFixture<PresentSimpleTestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentSimpleTestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentSimpleTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
