import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureSimpleTestFormComponent } from './future-simple-test-form.component';

describe('FutureSimpleTestFormComponent', () => {
  let component: FutureSimpleTestFormComponent;
  let fixture: ComponentFixture<FutureSimpleTestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureSimpleTestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureSimpleTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
