import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ActivityListComponent} from './activity-list/activity-list.component';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.page.html',
    styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
    type = 0;
    slideOpts = {
        effect: 'flip',
        autoplay: true
    };
    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    changeType(event: any) {
        this.type = event.target.value;
    }
}
