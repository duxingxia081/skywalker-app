import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MinePage} from './mine.page';
import {SharedModule} from '../shared/shared.module';
import { MyInfoComponent } from './my-info/my-info.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{path: '', component: MinePage}])
    ],
    declarations: [MinePage, MyInfoComponent]
})
export class MinePageModule {
}
