import {Component, Input, OnInit} from '@angular/core';
import {ImgBaseUrl} from '../../../config/env';
import {ModalController} from '@ionic/angular';
import {ModifyUserComponent} from './modify-user/modify-user.component';

@Component({
    selector: 'app-person-info',
    templateUrl: './person-info.component.html',
    styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {
    @Input() userInfo: any;
    imgBaseUrl: string = ImgBaseUrl;

    constructor(private modalController: ModalController) {
    }


    ngOnInit() {
    }

    async modifyUser(key, title) {
        const modal = await this.modalController.create({
            component: ModifyUserComponent,
            componentProps: {key: key, title: title, userInfo: this.userInfo}
        });
        return await modal.present();
    }

}
