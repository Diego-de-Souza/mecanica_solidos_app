import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosPraticosComponent } from './exercicios-praticos.component';

describe('ExerciciosPraticosComponent', () => {
  let component: ExerciciosPraticosComponent;
  let fixture: ComponentFixture<ExerciciosPraticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciciosPraticosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciciosPraticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
