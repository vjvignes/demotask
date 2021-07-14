import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobapplypotalComponent } from './jobapplypotal.component';

describe('JobapplypotalComponent', () => {
  let component: JobapplypotalComponent;
  let fixture: ComponentFixture<JobapplypotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobapplypotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobapplypotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
