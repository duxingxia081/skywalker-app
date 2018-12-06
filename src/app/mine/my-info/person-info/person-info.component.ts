import {Component, Input, OnInit} from '@angular/core';
import {ImgBaseUrl} from '../../../config/env';
import {ModalController} from '@ionic/angular';
import {ModifyUserComponent} from './modify-user/modify-user.component';
import {DataService} from '../../../service/data.service';

@Component({
    selector: 'app-person-info',
    templateUrl: './person-info.component.html',
    styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {
    @Input() userInfo: any;
    qrCode: string;
    imgBaseUrl: string = ImgBaseUrl;

    constructor(private modalController: ModalController,
                private dataService: DataService) {
    }


    ngOnInit() {
        this.getQrCode();
    }

    async modifyUser(key, title) {
        const modal = await this.modalController.create({
            component: ModifyUserComponent,
            componentProps: {key: key, title: title, userInfo: this.userInfo}
        });
        return await modal.present();
    }

    getQrCode() {
        this.dataService.getQrCode().subscribe(res => {
            if (res.code === '0') {
                this.userInfo.qrCodeImage = res.data;

            }
        });
    }
}
