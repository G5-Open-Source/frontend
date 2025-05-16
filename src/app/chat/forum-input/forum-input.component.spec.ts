import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumInputComponent } from './forum-input.component';

describe('ForumInputComponent', () => {
  let component: ForumInputComponent;
  let fixture: ComponentFixture<ForumInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
