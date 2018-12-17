import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MyActivityPage} from './my-activity.page';
import {SharedModule} from '../../shared/shared.module';

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
    declarations: [MyActivityPage]
})
export class MyActivityPageModule {
}
