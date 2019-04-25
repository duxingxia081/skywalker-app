import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'friend',
        children: [
          {
            path: '',
            loadChildren: '../../routes/tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'active',
        children: [
          {
            path: '',
            loadChildren: '../../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'share',
        children: [
          {
            path: '',
            loadChildren: '../../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'destination',
        children: [
          {
            path: '',
            loadChildren: '../../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'me',
        children: [
          {
            path: '',
            loadChildren: '../../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/friend',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/friend',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
