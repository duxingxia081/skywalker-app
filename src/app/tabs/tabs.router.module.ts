import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsPage} from './tabs.page';

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
                        loadChildren: '../friend/friend.module#FriendPageModule'
                    }
                ]
            },
            {
                path: 'activity',
                children: [
                    {
                        path: '',
                        loadChildren: '../activity/activity.module#ActivityPageModule'
                    }
                ]
            },
            {
                path: 'share',
                children: [
                    {
                        path: '',
                        loadChildren: '../share/share.module#SharePageModule'
                    }
                ]
            },
            {
                path: 'destination',
                children: [
                    {
                        path: '',
                        loadChildren: '../destination/destination.module#DestinationPageModule'
                    }
                ]
            },
            {
                path: 'mine',
                children: [
                    {
                        path: '',
                        loadChildren: '../mine/mine.module#MinePageModule'
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
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
