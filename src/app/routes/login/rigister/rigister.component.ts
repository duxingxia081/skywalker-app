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
    cordovaMobSms: any;

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
        this.initMobsms();
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

        if (!this.userMobile) {
            this.dataService.toastTip('请填写手机号');
            return;
        }
        if (!this.userPwd) {
            this.dataService.toastTip('请填写密码');
            return;
        }
        if (!this.mobileCode) {
            this.dataService.toastTip('请填写手机验证码');
            return;
        }
        this.cordovaMobSms.SubmitVerifyCode(res => {
            this.dataService.postDataNotLogin('users', {
                'userName': this.userMobile,
                'password': this.userPwd,
                'mobile': this.userMobile
            }).subscribe(res => {
                if (res.code !== '0') {
                    // this.getCaptcha();
                    this.dataService.toastTip(res.message);
                } else {
                    this.dataService.toastTip('注册成功!');
                    this.location.back();
                }
            });
        }, err => {
            console.log('验证码******' + err);
            this.dataService.toastTip('验证码错误!');
        }, this.userMobile, this.mobileCode);
    }

    // 发送验证码前需要初始化操作
    initMobsms() {
        if (!window['mobsms']) {
            alert('请在真机调试或检查插件是否安装正确');
            return;
        }
        // 申请key： http://dashboard.mob.com/#!/sms/dashboard
        let mobConfig = {
            APPKEY: '29d025c53ffd1',
            APPSECRET: '9d67b36379852a2a5cd3980ca95e44c5'
        };
        this.cordovaMobSms = window['mobsms'].init({MobConfig: mobConfig});
    }

    // 发送验证码
    requestVerifyCode() {
        if (!this.userMobile) {
            this.dataService.toastTip('请填写手机号');
            return;
        }
        this.cordovaMobSms.RequestVerifyCode(res => {
        }, err => {
        }, this.userMobile);
    }
}
