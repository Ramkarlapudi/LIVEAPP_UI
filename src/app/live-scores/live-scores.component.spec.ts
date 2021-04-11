import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LiveScoresComponent } from './live-scores.component';

describe('LiveScoresComponent', () => {
  let component: LiveScoresComponent;
  let fixture: ComponentFixture<LiveScoresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
