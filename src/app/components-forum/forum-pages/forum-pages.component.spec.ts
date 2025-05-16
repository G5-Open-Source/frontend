import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPagesComponent } from './forum-pages.component';

describe('ForumPagesComponent', () => {
  let component: ForumPagesComponent;
  let fixture: ComponentFixture<ForumPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
