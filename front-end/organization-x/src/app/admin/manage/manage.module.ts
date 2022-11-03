import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveComponent } from './remove/remove.component';
import { AddComponent } from './add/add.component';
import { SelectComponent } from './add/select/select.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchComponent } from 'src/app/shared/search/search.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CloseButtonComponent } from 'src/app/shared/close-button/close-button.component';
import { AppModule } from 'src/app/app.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    RemoveComponent,
    AddComponent,
    SelectComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    AppRoutingModule,
    MatIconModule
  ],
  exports: [
    RemoveComponent,
    AddComponent,
    SearchComponent,
  ]
})
export class ManageModule { }
