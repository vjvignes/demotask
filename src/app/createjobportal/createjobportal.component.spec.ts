import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatejobportalComponent } from './createjobportal.component';

describe('CreatejobportalComponent', () => {
  let component: CreatejobportalComponent;
  let fixture: ComponentFixture<CreatejobportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatejobportalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatejobportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
