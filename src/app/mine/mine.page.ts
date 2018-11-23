import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ImgBaseUrl} from '../config/env';

@Component({
    selector: 'app-mine',
    templateUrl: 'mine.page.html',
    styleUrls: ['mine.page.scss']
})
export class MinePage implements OnInit {

    userId: string;
    userInfo: any;
    imgBaseUrl: string = ImgBaseUrl;

    constructor(public router: Router) {
    }

    ngOnInit(): void {
        // weizh(测试初始化用）
        // this.userId = 'weizh';
    }

    checkLogin() {
        this.router.navigate(['/login']);
    }

    toMyInfoPage() {
        this.router.navigate(['/mine/my-info']);
    }
}
