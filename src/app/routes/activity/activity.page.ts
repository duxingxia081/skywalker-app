import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.page.html',
    styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
    type = '00';
    slideOpts = {
        effect: 'flip',
        autoplay: true
    };

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    changeType(type: any) {
        console.log(type.target.value);
    }
}
