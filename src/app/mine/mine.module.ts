import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MinePage} from './mine.page';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{path: '', component: MinePage}])
    ],
    declarations: [MinePage]
})
export class ContactPageModule {
}
