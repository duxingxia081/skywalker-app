import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../service/data.service';
import {Activity} from '../../../entity/activity';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-modify-my-activity',
    templateUrl: './modify-my-activity.component.html',
    styleUrls: ['./modify-my-activity.component.scss']
})
export class ModifyMyActivityComponent implements OnInit {

    activityTypes: any;
    activity: Activity;

    constructor(private dataService: DataService,
                private modalController: ModalController) {
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
                this.modalController.dismiss();
            }
        });
    }
}
