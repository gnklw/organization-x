import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SigninComponent } from './auth/signin/signin.component';
import { DepartmentComponent } from './core/department/department.component';
import { EmployeeComponent } from './core/employee/employee.component';
import { ManagementDepartmentsComponent } from './core/management/management-departments/management-departments.component';
import { ManegementComponent } from './core/management/manegement.component';
import { HomeComponent } from './home/home/home.component';
import { IndexComponent } from './home/index/index.component';

const routes: Routes = [
  {
    path: 'managements', component: ManegementComponent, canActivate: [AuthGuard], children: [
      {
        path: ':managementId/manage',
        component: ManegementComponent,
      },
      {
        path: ':managementId/edit',
        component: ManegementComponent,
      },
      {
        path: 'create',
        component: ManegementComponent,
      },
    ]
  },
  {
    path: 'departments', component: DepartmentComponent, canActivate: [AuthGuard], children: [
      {
        path: ':departmentId/manage',
        component: DepartmentComponent,
      },
      {
        path: ':departmentId/edit',
        component: DepartmentComponent,
      },
      {
        path: 'create',
        component: ManegementComponent,
      },
    ]
  },
  {
    path: 'employees', component: EmployeeComponent, canActivate: [AuthGuard], children: [
      {
        path: ':employeeId/edit',
        component: EmployeeComponent,
      },
      {
        path: 'create',
        component: ManegementComponent,
      },
    ]
  },
  { path: 'signin', component: SigninComponent },
  { path: '', component: IndexComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
