import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MinePage} from './mine.page';
import {SharedModule} from '../shared/shared.module';
import {MyInfoComponent} from './my-info/my-info.component';
import {PersonInfoComponent} from './my-info/person-info/person-info.component';
import {PasswordInfoComponent} from './my-info/password-info/password-info.component';
import {SafeInfoComponent} from './my-info/safe-info/safe-info.component';
import {OtherInfoComponent} from './my-info/other-info/other-info.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: MinePage,
            },
            {
                path: 'my-info',
                component: MyInfoComponent
            }
        ])
    ],
    declarations: [MinePage, MyInfoComponent, PersonInfoComponent, PasswordInfoComponent, SafeInfoComponent, OtherInfoComponent]
})
export class MinePageModule {
}