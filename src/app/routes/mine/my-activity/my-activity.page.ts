import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModifyMyActivityComponent} from './modify-my-activity/modify-my-activity.component';
import {DataService} from '../../../core/service/data.service';
import {UserInfo} from '../../../core/class';
@Component({
    selector: 'app-my-activity',
    templateUrl: './my-activity.page.html',
    styleUrls: ['./my-activity.page.scss'],
})
export class MyActivityPage extends UserInfo implements OnInit {

    listActivity: Array<any>;
    activeId = 1000000;

    constructor(protected dataService: DataService,
                private modalController: ModalController) {
        super(dataService);
    }

    ngOnInit() {
        this.getActivities();
    }


    async modifyMyActivity() {
        const modal = await this.modalController.create({
            component: ModifyMyActivityComponent
        });
        return await modal.present();
    }

    loadData(event) {
        this.getActivities(event);
    }

    getActivities(event?) {
        const params = {
            'activeId': this.activeId,
            'userId': this.userInfo.userId
        };
        this.dataService.getData('activity', params).subscribe(
            res => {
                if (null != res && res.code === '0' && res.data != null) {
                    if (event) {
                        const newData: Array<any> = res.data.list;
                        this.listActivity = this.listActivity.concat(newData);
                        event.target.complete();
                    }
                    else {
                        this.listActivity = res.data.list;
                    }
                    this.getLastActiveId();
                }
            }
        );
    }

    getLastActiveId() {
        if (null != this.listActivity && this.listActivity.length !== 0) {
            const lastActivity: any = this.listActivity[this.listActivity.length - 1];
            this.activeId = lastActivity.activeId;
        }
    }
}
