import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHeaderComponent } from './the-header.component.component';

describe('TheHeaderComponentComponent', () => {
  let component: TheHeaderComponent;
  let fixture: ComponentFixture<TheHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
