import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ImgBaseUrl} from '../config/env';
import {LocalStorageService} from '../service/local-storage.service';
import {DataService} from '../service/data.service';
import {ToastController} from '@ionic/angular';
import {AppService} from '../service/app.service';
import {UserInfo} from '../class';

@Component({
    selector: 'app-mine',
    templateUrl: 'mine.page.html',
    styleUrls: ['mine.page.scss']
})
export class MinePage extends UserInfo implements OnInit {
    authorization: string;
    userInfo: any;
    imgBaseUrl: string = ImgBaseUrl;

    constructor(public appService: AppService,
                public router: Router,
                public dataService: DataService,
                public localStorageService: LocalStorageService,
                public toastCtrl: ToastController) {
        super(appService, localStorageService);
    }

    ngOnInit(): void {
        this.getUserInfo();
    }

    public getUserInfo() {
        if (this.authorization) {
            this.dataService.getUserInfo().subscribe(res => {
                this.userInfo = res.data;
            });
        }
    }

    public exit() {
        this.localStorageService.removeStore('authorization');
        this.userInfo = {};
        this.appService.userInfoEvent.emit('update');
    }

    toMyInfoPage() {
        this.router.navigate(['/mine/my-info']);
    }
}
