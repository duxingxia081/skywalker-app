import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {DataService} from '../../../core/service/data.service';
import {UserInfo} from '../../../core/class';

@Component({
    selector: 'app-activity-detail',
    templateUrl: './activity-detail.component.html',
    styleUrls: ['./activity-detail.component.scss']
})
export class ActivityDetailComponent extends UserInfo implements OnInit {

    @Input() activeId: number;
    activity: any;
    slideOpts = {
        effect: 'flip',
        autoplay: true
    };

    constructor(protected dataService: DataService,
                private router: Router,
                private modalController: ModalController) {
        super(dataService);
    }

    ngOnInit() {
        this.getActivity();
    }

    getActivity() {
        this.dataService.getData('activity/' + this.activeId).subscribe(
            res => {
                if (null != res && res.code === '0' && res.data != null) {
                    this.activity = res.data;
                }
            }
        );
    }

    // todo(判断是否有手机号)
    addActivity() {
        if (null == this.authorization || null == this.userInfo) {
            this.router.navigate(['/login']);
        } else {
            this.dataService.postData('activity/' + this.activeId + '/activityUser', null).subscribe(
                res => {
                    if (null != res && res.code === '0') {
                        this.dataService.toastTip('加入成功');
                        this.modalController.dismiss();
                    }
                    else {
                        this.dataService.toastTip(res.message);
                    }
                }
            );
        }

    }
}
