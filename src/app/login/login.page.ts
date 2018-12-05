import {Component, OnInit} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {Location} from '@angular/common';
import {DataService} from '../service/data.service';
import {LocalStorageService} from '../service/local-storage.service';
import {AppService} from '../service/app.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    userInfo: any;
    userName: string;
    userMobile: string;
    loginType: string;
    userPwd: string;
    showPwd: boolean;
    captchaCodeImg: string;
    codeNumber: string;
    mobileCode: string;

    constructor(
        public location: Location,
        public appService: AppService,
        public toastCtrl: ToastController,
        public dataService: DataService,
        public localStorage: LocalStorageService) {
    }

    ngOnInit() {
        this.userName = '';
        this.userMobile = '';
        this.userPwd = '';
        this.loginType = 't-userName';
        this.showPwd = false;
        this.getKaptcha();
    }

    async toastTip(message: string) {
        const toast = await this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'middle'
        });
        toast.present();
    }

    getKaptcha() {
        this.dataService.getKaptcha().subscribe(res => {
            if (res.code !== '0') {
                this.toastTip(res.message);
            } else {
                this.captchaCodeImg = res.data;
            }
        });
    }

    logIn() {
        if (this.loginType === 't-userName') {
            if (!this.userName) {
                this.toastTip('请填写用户名');
                return;
            }
            if (!this.userPwd) {
                this.toastTip('请填写密码');
                return;
            }
        }
        if (this.loginType === 't-mobile') {
            if (!this.userMobile) {
                this.toastTip('请填写手机号');
                return;
            }
            if (!this.mobileCode) {
                this.toastTip('请填写手机验证码');
                return;
            }
        }
        if (!this.codeNumber) {
            this.toastTip('请填写验证码');
            return;
        }
        this.dataService.accountLogin(this.userName, this.userPwd, this.codeNumber).subscribe(res => {
            if (res.code !== '0') {
                this.toastTip(res.message);
            } else {
                this.localStorage.setStore('authorization', res.data);
                this.appService.userInfoEvent.emit('update');
                this.location.back();
            }
        });
    }
}
