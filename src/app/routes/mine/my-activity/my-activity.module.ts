import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MyActivityPage} from './my-activity.page';
import {ModifyMyActivityComponent} from './modify-my-activity/modify-my-activity.component';
import {SharedModule} from '../../../core/shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: MyActivityPage
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [MyActivityPage, ModifyMyActivityComponent],
    entryComponents: [
        ModifyMyActivityComponent
    ]
})
export class MyActivityPageModule {
}
