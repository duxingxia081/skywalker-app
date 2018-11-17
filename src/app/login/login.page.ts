import {Component, OnInit} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    userName: string;
    userMobile: string;
    loginType: string;
    userPwd: string;
    showPwd: boolean;
    captchaCodeImg: string;
    codeNumber: string;
    mobileCode: string;

    constructor(public toastCtrl: ToastController) {
    }

    ngOnInit() {
        this.userName = '';
        this.userMobile = '';
        this.userPwd = '';
        this.loginType = 't-userName';
        this.showPwd = false;
    }

    async toastTip(message: string) {
        const toast = await this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'middle'
        });
        toast.present();
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
    }
}
