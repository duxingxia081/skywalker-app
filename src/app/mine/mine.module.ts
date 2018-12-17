import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MinePage} from './mine.page';
import {SharedModule} from '../shared/shared.module';
import {MyInfoComponent} from './my-info/my-info.component';
import {PersonInfoComponent} from './my-info/person-info/person-info.component';
import {PasswordInfoComponent} from './my-info/password-info/password-info.component';
import {SafeInfoComponent} from './my-info/safe-info/safe-info.component';
import {OtherInfoComponent} from './my-info/other-info/other-info.component';
import {ModifyUserComponent} from './my-info/person-info/modify-user/modify-user.component';
import {AuthGuard} from '../auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
            {path: '', component: MinePage},
            {path: 'myInfo', component: MyInfoComponent},
            {path: 'myActivity', loadChildren: './my-activity/my-activity.module#MyActivityPageModule'}
        ]
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [MinePage, MyInfoComponent, PersonInfoComponent, PasswordInfoComponent, SafeInfoComponent, OtherInfoComponent, ModifyUserComponent],
    entryComponents: [
        ModifyUserComponent
    ]
})
export class MinePageModule {
}