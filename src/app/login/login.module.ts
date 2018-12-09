import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {LoginPage} from './login.page';
import {SharedModule} from '../shared/shared.module';
import {RigisterComponent} from './rigister/rigister.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: LoginPage
            },
            {
                path: 'register',
                component: RigisterComponent
            }])
    ],
    declarations: [LoginPage, RigisterComponent]
})
export class LoginPageModule {
}
