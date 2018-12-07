import {Component, Input, OnInit} from '@angular/core';
import {ImgBaseUrl} from '../../../config/env';
import {ModifyUserComponent} from './modify-user/modify-user.component';
import {DataService} from '../../../service/data.service';
import {ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker/ngx';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-person-info',
    templateUrl: './person-info.component.html',
    providers: [ImagePicker],
    styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {
    @Input() userInfo: any;
    qrCode: string;
    imgBaseUrl: string = ImgBaseUrl;

    constructor(private dataService: DataService,
                private imagePicker: ImagePicker,
                private modalController: ModalController) {
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

    uploadHead() {
        this.imagePicker.hasReadPermission().then(
            res => {
                if (!res) {
                    this.imagePicker.requestReadPermission();
                }
                else {
                    this.uploadImgs();
                }
            }
        );
    }

    uploadImgs() {

        const options: ImagePickerOptions = {
            width: 200,
            height: 200,
            maximumImagesCount: 1,
            outputType: 1
        };
        this.imagePicker.getPictures(options).then((results) => {
            console.log('Image URI: ' + results);
        }, (err) => {
            this.dataService.toastTip('更新头像出错');
        });
    }
}
