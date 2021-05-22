import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyTestFormComponent } from './vocabulary-test-form.component';

describe('VocabularyTestFormComponent', () => {
  let component: VocabularyTestFormComponent;
  let fixture: ComponentFixture<VocabularyTestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocabularyTestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
