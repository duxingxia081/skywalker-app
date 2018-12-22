import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

    listActivity: Array<any>;
    activeId = 1000000;
    @Input() activityType: string;

    constructor(protected dataService: DataService,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.getActivities();
    }


    async modifyMyActivity() {
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
}
