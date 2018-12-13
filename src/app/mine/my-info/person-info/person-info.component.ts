import {Component, Input, OnInit} from '@angular/core';
import {BaseUrl, ImgBaseUrl} from '../../../config/env';
import {ModifyUserComponent} from './modify-user/modify-user.component';
import {DataService} from '../../../service/data.service';
import {ActionSheetController, ModalController} from '@ionic/angular';

import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker/ngx';
import {Crop} from '@ionic-native/crop/ngx';

@Component({
    selector: 'app-person-info',
    templateUrl: './person-info.component.html',
    providers: [ImagePicker, Crop, Camera],
    styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {
    @Input() userInfo: any;
    qrCode: string;
    imgBaseUrl: string = ImgBaseUrl + 'default.jpg';
    upload: any = {
        url: BaseUrl + 'users/headImg', // 接收图片的url
        params: {}
    };

    constructor(private dataService: DataService,
                private imagePicker: ImagePicker,
                private modalController: ModalController,
                private actionSheetCtrl: ActionSheetController,
                private camera: Camera,
                private crop: Crop) {
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
                this.reduceImages(results);
            }, (err) => {
                console.log('openImagePicker' + err);
            });
    }

    reduceImages(selectedImg: any): any {
        return selectedImg.reduce((promise: any, item: any) => {
            return promise.then((result) => {
                return this.crop.crop(item, {quality: 75, targetHeight: 72, targetWidth: 72})
                    .then(newImage => {
                        this.dataService.uploadImg(newImage, this.upload);
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
            this.crop.crop(data, {quality: 75, targetHeight: 72, targetWidth: 72}).then(
                (newImage) => {
                    this.dataService.uploadImg(newImage, this.upload);
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
