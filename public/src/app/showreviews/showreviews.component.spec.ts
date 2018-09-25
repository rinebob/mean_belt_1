import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowreviewsComponent } from './showreviews.component';

describe('ShowreviewsComponent', () => {
  let component: ShowreviewsComponent;
  let fixture: ComponentFixture<ShowreviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowreviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
