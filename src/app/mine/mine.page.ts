import {Component, OnInit} from '@angular/core';
import {ImgBaseUrl} from '../config/env';
import {LocalStorageService} from '../service/local-storage.service';
import {UserInfo} from '../class';
import {DataService} from '../service/data.service';

@Component({
    selector: 'app-mine',
    templateUrl: 'mine.page.html',
    styleUrls: ['mine.page.scss']
})
export class MinePage implements OnInit {
    private imgBaseUrl: string = ImgBaseUrl;
    private authorization: string;
    private userInfo: any;

    constructor(protected localStorageService: LocalStorageService,
                protected dataService: DataService) {
    }

    ngOnInit(): void {
        this.getAuthorization();
        this.getUserInfo();
    }

    private getAuthorization() {
        this.authorization = this.localStorageService.getStore('authorization');
    }

    private getUserInfo() {
        if (this.authorization) {
            this.dataService.getUserInfo(this.authorization).subscribe(res => {
                this.userInfo = res.data;
            });
        }
    }
}
