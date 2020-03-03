import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./realPages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      }
    ]
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./realPages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
