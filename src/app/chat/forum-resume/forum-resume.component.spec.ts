import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumResumeComponent } from './forum-resume.component';

describe('ForumResumeComponent', () => {
  let component: ForumResumeComponent;
  let fixture: ComponentFixture<ForumResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
