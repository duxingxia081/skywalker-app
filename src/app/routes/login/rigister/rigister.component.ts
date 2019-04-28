import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {DataService} from '../../../core/service/data.service';

@Component({
    selector: 'app-rigister',
    templateUrl: './rigister.component.html',
    styleUrls: ['./rigister.component.scss']
})
export class RigisterComponent implements OnInit {
    userInfo: any;
    userName: string;
    userMobile: string;
    registerType: string;
    userPwd: string;
    showPwd: boolean;
    captchaCodeImg: string;
    codeNumber: string;
    mobileCode: string;

    constructor(
        private location: Location,
        private dataService: DataService) {
    }

    ngOnInit() {
        this.userName = '';
        this.userMobile = '';
        this.userPwd = '';
        this.registerType = 't-userName';
        this.showPwd = false;
        this.getCaptcha();
    }

    getCaptcha() {
        this.dataService.getCaptcha().subscribe(res => {
            if (res.code !== '0') {
                this.dataService.toastTip(res.message);
            } else {
                this.captchaCodeImg = res.data;
            }
        });
    }

    register() {
        if (this.registerType === 't-userName') {
            if (!this.userName) {
                this.dataService.toastTip('请填写用户名');
                return;
            }
        }
        if (!this.userPwd) {
            this.dataService.toastTip('请填写密码');
            return;
        }
        if (this.registerType === 't-mobile') {
            if (!this.userMobile) {
                this.dataService.toastTip('请填写手机号');
                return;
            }
            if (!this.mobileCode) {
                this.dataService.toastTip('请填写手机验证码');
                return;
            }
        }
/*        if (!this.codeNumber) {
            this.dataService.toastTip('请填写验证码');
            return;
        }*/
        this.dataService.postDataNotLogin('users', {
            'userName': this.userName,
            'password': this.userPwd,
            'captcha': this.codeNumber
        }).subscribe(res => {
            if (res.code !== '0') {
                // this.getCaptcha();
                this.dataService.toastTip(res.message);
            } else {
                this.dataService.toastTip('注册成功!');
                this.location.back();
            }
        });
    }
}
