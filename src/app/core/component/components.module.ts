import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {BackHeaderComponent} from './back/back-header.component';

// import { DirectivesModule } from '../directives';
const coms: any[] = [
    BackHeaderComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        IonicModule.forRoot(),
    ],
    declarations: [
        coms
    ],
    exports: [
        coms
    ],
    entryComponents: [],
})
export class ComponentsModule {
}
