import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeTablePageRoutingModule } from './employee-table-routing.module';

import { EmployeeTablePage } from './employee-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeTablePageRoutingModule
  ],
  declarations: [EmployeeTablePage]
})
export class EmployeeTablePageModule {}
