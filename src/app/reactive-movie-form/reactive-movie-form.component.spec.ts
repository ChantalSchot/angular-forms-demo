import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveMovieFormComponent } from './reactive-movie-form.component';

describe('ReactiveMovieFormComponent', () => {
  let component: ReactiveMovieFormComponent;
  let fixture: ComponentFixture<ReactiveMovieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveMovieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveMovieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
