import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsPage} from './tabs.page';
import {MinePage} from '../mine/mine.page';
import {ActivityPage} from '../activity/activity.page';
import {FriendPage} from '../friend/friend.page';
import {SharePage} from '../share/share.page';
import {DestinationPage} from '../destination/destination.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/(friend:friend)',
                pathMatch: 'full',
            },
            {
                path: 'friend',
                outlet: 'friend',
                component: FriendPage
            },
            {
                path: 'activity',
                outlet: 'activity',
                component: ActivityPage
            },
            {
                path: 'share',
                outlet: 'share',
                component: SharePage
            },
            {
                path: 'destination',
                outlet: 'destination',
                component: DestinationPage
            },
            {
                path: 'mine',
                outlet: 'mine',
                component: MinePage
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(friend:friend)',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
