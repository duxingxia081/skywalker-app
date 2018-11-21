import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs.router.module';

import {TabsPage} from './tabs.page';
import {MinePageModule} from '../mine/mine.module';
import {SharePageModule} from '../share/share.module';
import {FriendPageModule} from '../friend/friend.module';
import {DestinationPageModule} from '../destination/destination.module';
import {ActivityPageModule} from '../activity/activity.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        MinePageModule,
        ActivityPageModule,
        DestinationPageModule,
        FriendPageModule,
        SharePageModule
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
