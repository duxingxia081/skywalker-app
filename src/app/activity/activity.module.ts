import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ActivityPage} from './activity.page';
import {ActivityListComponent} from './activity-list/activity-list.component';

const routes: Routes = [
    {
        path: '',
        component: ActivityPage,
        children: [
            {
                path: 'activityList',
                component: ActivityListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ActivityPage, ActivityListComponent]
})
export class ActivityPageModule {
}
