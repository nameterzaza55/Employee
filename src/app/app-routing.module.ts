import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'employee-table',
    pathMatch: 'full'
  },
  {
    path: 'employee-table',
    loadChildren: () => import('./employee-table/employee-table.module').then( m => m.EmployeeTablePageModule)
  },
  {
    path: 'employee-add',
    loadChildren: () => import('./employee-add/employee-add.module').then( m => m.EmployeeAddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
