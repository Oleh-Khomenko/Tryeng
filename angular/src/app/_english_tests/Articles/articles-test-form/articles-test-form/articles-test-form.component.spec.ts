import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesTestFormComponent } from './articles-test-form.component';

describe('ArticlesTestFormComponent', () => {
  let component: ArticlesTestFormComponent;
  let fixture: ComponentFixture<ArticlesTestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesTestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
