import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementDepartmentsComponent } from './management-departments.component';

describe('ManagementDepartmentsComponent', () => {
  let component: ManagementDepartmentsComponent;
  let fixture: ComponentFixture<ManagementDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementDepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
