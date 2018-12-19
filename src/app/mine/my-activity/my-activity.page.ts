import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';
import {ModalController} from '@ionic/angular';
import {ModifyMyActivityComponent} from './modify-my-activity/modify-my-activity.component';
import {UserInfo} from '../../class';

@Component({
    selector: 'app-my-activity',
    templateUrl: './my-activity.page.html',
    styleUrls: ['./my-activity.page.scss'],
})
export class MyActivityPage extends UserInfo implements OnInit {

    listActivity: Array<any>;
    time = new Date().getTime();

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
            'time': this.time,
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
                    this.getLastTime();
                }
            }
        );
    }

    getLastTime() {
        if (null != this.listActivity && this.listActivity.length !== 0) {
            const lastActivity: any = this.listActivity[this.listActivity.length - 1];
            const lastTime = lastActivity.timeCreate;
            this.time = new Date(lastTime).getTime();
        }
    }
}
