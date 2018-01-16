import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcompetitionsComponent } from './allcompetitions.component';

describe('AllcompetitionsComponent', () => {
  let component: AllcompetitionsComponent;
  let fixture: ComponentFixture<AllcompetitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcompetitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
