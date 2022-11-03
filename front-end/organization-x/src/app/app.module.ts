import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManegementComponent } from './core/management/manegement.component';
import { DepartmentComponent } from './core/department/department.component';
import { EmployeeComponent } from './core/employee/employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DepartmentEditComponent } from './admin/department-edit/department-edit.component';
import { DepartmentEmployeesComponent } from './core/department/department-employees/department-employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagementDepartmentsComponent } from './core/management/management-departments/management-departments.component';
import { EmployeeEditComponent } from './admin/employee-edit/employee-edit.component';
import { ManagementEditComponent } from './admin/management-edit/management-edit.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { CreateButtonComponent } from './shared/create-button/create-button.component';
import { DepartmentCreateComponent } from './admin/department-create/department-create.component';
import { EmployeeCreateComponent } from './admin/employee-create/employee-create.component';
import { ManagementCreateComponent } from './admin/management-create/management-create.component';
import { ManageModule } from './admin/manage/manage.module';
import { StoreModule } from '@ngrx/store';
import { ManagementEffect } from './+store/management.effect';
import { EffectsModule } from '@ngrx/effects';
import { MANAGEMENTS_FEATURE_KEY } from './+store/management.state';
import { reducer } from './+store/management.reducers';
import { ManagementFacade } from './+store/management.facade';
import { HttpInterceptorService } from './auth/httpInterceptor.service';
import { AuthGuard } from './auth/auth.guard';
import { HeaderComponent } from './shared/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { CloseButtonComponent } from './shared/close-button/close-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ManegementComponent,
    DepartmentComponent,
    EmployeeComponent,
    DepartmentEditComponent,
    DepartmentEmployeesComponent,
    ManagementDepartmentsComponent,
    EmployeeEditComponent,
    ManagementEditComponent,
    ConfirmationDialogComponent,
    CreateButtonComponent,
    DepartmentCreateComponent,
    EmployeeCreateComponent,
    ManagementCreateComponent,
    HeaderComponent,
    CloseButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ManageModule,
    AuthModule,
    HomeModule,
    MatSortModule,
    Ng2SearchPipeModule,
    InfiniteScrollModule,
    MatIconModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(MANAGEMENTS_FEATURE_KEY, reducer),
    EffectsModule.forRoot([ManagementEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  exports: [
    CloseButtonComponent,
  ],
  providers: [
    ManagementFacade,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
