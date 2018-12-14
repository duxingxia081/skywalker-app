import {Component, OnInit} from '@angular/core';
import {DataService} from '../service/data.service';
import {UserInfo} from '../class';
import {AppService} from '../service/app.service';

@Component({
    selector: 'app-mine',
    templateUrl: 'mine.page.html',
    styleUrls: ['mine.page.scss']
})
export class MinePage extends UserInfo implements OnInit {
    constructor(protected dataService: DataService, private appService: AppService) {
        super(dataService);
        this.appService.userInfoEvent.subscribe(res => {
            this.getAuthorization();
            this.getUserInfo();
        });
    }

    ngOnInit(): void {
    }
}
