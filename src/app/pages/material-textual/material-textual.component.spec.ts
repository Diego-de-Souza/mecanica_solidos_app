import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTextualComponent } from './material-textual.component';

describe('MaterialTextualComponent', () => {
  let component: MaterialTextualComponent;
  let fixture: ComponentFixture<MaterialTextualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialTextualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialTextualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
