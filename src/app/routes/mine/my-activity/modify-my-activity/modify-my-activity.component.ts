import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Activity} from '../../../../core/entity/activity';
import {BaseUrl} from '../../../../core/config/env';
import {DataService} from '../../../../core/service/data.service';
import {ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker/ngx';
import {Crop} from '@ionic-native/crop/ngx';

@Component({
    selector: 'app-modify-my-activity',
    providers: [ImagePicker, Crop],
    templateUrl: './modify-my-activity.component.html',
    styleUrls: ['./modify-my-activity.component.scss']
})
export class ModifyMyActivityComponent implements OnInit {
    @Input() key: string;
    activityTypes: any;
    activity: Activity;
    files: Array<any>;
    upload: any = {
        url: BaseUrl + 'activity/activityImg', // 接收图片的url
        params: {},
        success: (data) => {
            if (data.code !== '0') {
                this.dataService.toastTip(data.message);
            }
        } // 图片上传成功后的回调
    };

    constructor(private dataService: DataService,
                private modalController: ModalController,
                private imagePicker: ImagePicker,
                private crop: Crop) {
        this.activity = new Activity();
    }

    ngOnInit() {
        this.getActivityType();
    }

    getActivityType() {
        this.dataService.getData('activeType').subscribe(
            res => {
                if (null != res && res.code === '0' && res.data != null) {
                    this.activityTypes = res.data;
                } else {
                    this.dataService.toastTip('获取活动类型出错，请稍后再试');
                }
            }
        );
    }

    modify() {
        if (!this.activity.activeTitle) {
            this.dataService.toastTip('请填写活动标题');
            return;
        }
        if (!this.activity.typeId) {
            this.dataService.toastTip('请选择活动类型');
            return;
        }
        if (!this.activity.startAddressName) {
            this.dataService.toastTip('请填写出发地');
            return;
        }
        if (!this.activity.endAddressName) {
            this.dataService.toastTip('请填写目的地');
            return;
        }
        if (!this.activity.goTimeStr) {
            this.dataService.toastTip('请选择出发时间');
            return;
        }
        if (!this.activity.days) {
            this.dataService.toastTip('请填写活动耗时');
            return;
        }
        if (!this.activity.charge) {
            this.dataService.toastTip('请填写费用');
            return;
        }
        this.dataService.postData('activity', this.activity).subscribe(res => {
            if (res.code !== '0') {
                this.dataService.toastTip(res.message);
            } else {
                if (null != this.files) {
                    this.upload.params = {'activeId': res.data};
                    this.files.forEach(file => {
                        this.dataService.uploadImg(file, this.upload);
                    });
                }
                this.modalController.dismiss();
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
                return this.crop.crop(item, {quality: 75, targetHeight: 108, targetWidth: 192})
                    .then(newImage => {
                        if (null == this.files) {
                            this.files = new Array<any>();
                        }
                        this.files.push(newImage);
                        // this.dataService.uploadImg(newImage, this.upload);
                    });
            });
        }, Promise.resolve());
    }
}
