import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';
import {ModalController} from '@ionic/angular';
import {ActivityDetailComponent} from '../activity-detail/activity-detail.component';

@Component({
    selector: 'app-activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

    listActivity: Array<any>;
    activeId = 1000000;
    @Input() activityType: string;

    constructor(private dataService: DataService,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.getActivities();
    }


    loadData(event) {
        this.getActivities(event);
    }

    getActivities(event?) {
        const params = {
            'activeId': this.activeId
        };
        this.dataService.getData('activity', params).subscribe(
            res => {
                if (null != res && res.code === '0' && res.data != null) {
                    if (event) {
                        const newData: Array<any> = res.data.list;
                        this.listActivity = this.listActivity.concat(newData);
                        event.target.complete();
                        if (res.data.list.length <= 5) {
                            event.target.disabled = true;
                        }
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

    async showDetail(activeId: number) {
        const modal = await this.modalController.create({
            component: ActivityDetailComponent,
            componentProps: {activeId: activeId}
        });
        return await modal.present();
    }
}
