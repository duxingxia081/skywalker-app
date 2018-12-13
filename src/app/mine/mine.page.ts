import {Component, OnInit} from '@angular/core';
import {DataService} from '../service/data.service';
import {UserInfo} from '../class';
import {Router} from '@angular/router';

@Component({
    selector: 'app-mine',
    templateUrl: 'mine.page.html',
    styleUrls: ['mine.page.scss']
})
export class MinePage extends UserInfo implements OnInit {
    constructor(protected dataService: DataService,
                protected router: Router) {
        super(dataService, router);
    }

    ngOnInit(): void {
    }
}
