import {Component, OnInit} from '@angular/core';
import {UserInfo} from '../../core/class';
import {DataService} from '../../core/service/data.service';
import {AppService} from '../../core/service/app.service';

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
