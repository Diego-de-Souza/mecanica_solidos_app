import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentExerciciosComponent } from './content-exercicios.component';

describe('ContentExerciciosComponent', () => {
  let component: ContentExerciciosComponent;
  let fixture: ComponentFixture<ContentExerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentExerciciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentExerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
