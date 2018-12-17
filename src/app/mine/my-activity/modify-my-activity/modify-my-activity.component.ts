import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../service/data.service';

@Component({
    selector: 'app-modify-my-activity',
    templateUrl: './modify-my-activity.component.html',
    styleUrls: ['./modify-my-activity.component.scss']
})
export class ModifyMyActivityComponent implements OnInit {

    activityTypes: any;
    activity: any;

    constructor(private dataService: DataService) {
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
}
