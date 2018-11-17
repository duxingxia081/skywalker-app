import {Component, Input} from '@angular/core';

@Component({
    selector: 'back-header',
    template: `
        <ion-toolbar color="primary">
            <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title>{{wTitle}}</ion-title>
        </ion-toolbar>
    `
})
export class BackHeaderComponent {
    @Input() wTitle: string;

}
