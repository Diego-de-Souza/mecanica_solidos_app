import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentExercicioParafusoComponent } from './content-exercicio-parafuso.component';

describe('ContentExercicioParafusoComponent', () => {
  let component: ContentExercicioParafusoComponent;
  let fixture: ComponentFixture<ContentExercicioParafusoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentExercicioParafusoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentExercicioParafusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
