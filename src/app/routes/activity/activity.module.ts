import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ActivityPage} from './activity.page';
import {ActivityListComponent} from './activity-list/activity-list.component';
import {ActivityDetailComponent} from './activity-detail/activity-detail.component';
import {SharedModule} from '../../core/shared/shared.module';

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
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ActivityPage, ActivityListComponent, ActivityDetailComponent],
    entryComponents: [
        ActivityDetailComponent
    ]
})
export class ActivityPageModule {
}
