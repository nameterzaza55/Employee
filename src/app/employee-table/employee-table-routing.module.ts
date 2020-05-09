import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeTablePage } from './employee-table.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeTablePageRoutingModule {}
