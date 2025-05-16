import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumDetalleComponent } from './forum-detalle.component';

describe('ForumDetalleComponent', () => {
  let component: ForumDetalleComponent;
  let fixture: ComponentFixture<ForumDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
