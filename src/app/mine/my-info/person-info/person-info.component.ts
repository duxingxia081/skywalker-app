import {Component, Input, OnInit} from '@angular/core';
import {ImgBaseUrl} from '../../../config/env';
import {ModifyUserComponent} from './modify-user/modify-user.component';
import {DataService} from '../../../service/data.service';
import {ActionSheetController, ModalController} from '@ionic/angular';

import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker/ngx';
import {Crop} from '@ionic-native/crop/ngx';
import {Base64} from '@ionic-native/base64/ngx';

@Component({
    selector: 'app-person-info',
    templateUrl: './person-info.component.html',
    providers: [ImagePicker, Crop, Camera, Base64],
    styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {
    @Input() userInfo: any;
    qrCode: string;
    imgBaseUrl: string = ImgBaseUrl + 'default.jpg';

    constructor(private dataService: DataService,
                private imagePicker: ImagePicker,
                private modalController: ModalController,
                private actionSheetCtrl: ActionSheetController,
                private camera: Camera,
                private crop: Crop,
                private base64: Base64) {
    }


    ngOnInit() {
        this.getQrCode();
        this.getHeadImg();
    }

    async modifyUser(key, title) {
        const modal = await this.modalController.create({
            component: ModifyUserComponent,
            componentProps: {key: key, title: title, userInfo: this.userInfo}
        });
        return await modal.present();
    }

    modifyImage(img) {
        console.log(img);
        this.base64.encodeFile(img).then((base64File: string) => {
            console.log('base64File:' + base64File);
            /*this.imgBaseUrl = 'data:image/jpg;base64,' + base64File;
            this.userInfo.headImage = 'data:image/jpg;base64,' + base64File;
            this.dataService.updateUserInfo(this.userInfo).subscribe(res => {
                if (res.code !== '0') {
                    this.dataService.toastTip(res.message);
                }
            });*/
        }, (err) => {
            console.log(err);
        });
    }

    getHeadImg() {
        this.dataService.getData('users/headImg').subscribe(
            res => {
                if (null != res && res.code === '0' && res.data != null) {
                    this.imgBaseUrl = res;
                }
            }
        );
    }

    private getQrCode() {
        this.dataService.getQrCode().subscribe(res => {
            if (res.code === '0') {
                this.userInfo.qrCodeImage = res.data;

            }
        });
    }

    /**
     * 选择图片
     */
    openImagePicker() {
        const options: ImagePickerOptions = {
            maximumImagesCount: 1,
            outputType: 0
        };
        this.imagePicker.getPictures(options)
            .then((results) => {
                const s = this.reduceImages(results);
                console.log(s);
            }, (err) => {
                console.log(err);
            });
    }

    reduceImages(selectedImg: any): any {
        return selectedImg.reduce((promise: any, item: any) => {
            return promise.then((result) => {
                return this.crop.crop(item, {quality: 75, targetHeight: 200, targetWidth: 200})
                    .then(newImage => {
                        console.log('all images cropped2' + newImage);
                        this.modifyImage(newImage);
                    });
            });
        }, Promise.resolve());
    }

    takePicture() {
        const options: CameraOptions = {
            quality: 100,
            correctOrientation: true,
            destinationType: 1
        };
        this.camera.getPicture(options).then((data) => {
            this.crop.crop(data, {quality: 75, targetHeight: 200, targetWidth: 200}).then(
                (newImage) => {
                    this.modifyImage(newImage);
                },
                error => console.error('Error cropping image', error));
        }, function (error) {
            console.log(error);
        });
    }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetCtrl.create({
            buttons: [{
                text: '拍照',
                role: 'takePhoto',
                handler: () => {
                    this.takePicture();
                }
            }, {
                text: '从相册选择',
                role: 'chooseFromAlbum',
                handler: () => {
                    this.openImagePicker();
                }
            }, {
                text: '取消',
                role: 'cancel',
                handler: () => {
                    console.log('cancel');
                }
            }]
        });

        await actionSheet.present().then(value => {
            console.log(value);
            return value;
        });
    }
}
