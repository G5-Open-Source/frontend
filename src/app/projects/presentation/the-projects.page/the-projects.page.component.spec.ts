import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheProjectsPageComponent } from './the-projects.page.component';

describe('TheProjectsPageComponent', () => {
  let component: TheProjectsPageComponent;
  let fixture: ComponentFixture<TheProjectsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheProjectsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
