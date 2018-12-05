import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModifyUserComponent} from '../person-info/modify-user/modify-user.component';

@Component({
  selector: 'app-password-info',
  templateUrl: './password-info.component.html',
  styleUrls: ['./password-info.component.scss']
})
export class PasswordInfoComponent implements OnInit {

    @Input() userInfo: any;

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
