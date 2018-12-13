import {Component, OnInit} from '@angular/core';
import {DataService} from '../service/data.service';

@Component({
    selector: 'app-mine',
    templateUrl: 'mine.page.html',
    styleUrls: ['mine.page.scss']
})
export class MinePage implements OnInit {
    private imgBaseUrl: string;
    private userInfo: any;

    constructor(protected dataService: DataService) {
    }

    ngOnInit(): void {
        this.userInfo = this.dataService.getStore('userInfo');
        this.imgBaseUrl = this.dataService.getStore('headImg');
        console.log(this.dataService.getStore('headImg'));
        console.log(this.dataService.getStore('userInfo'));
    }
}
