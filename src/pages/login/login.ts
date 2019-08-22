import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {RegisterPage} from '../register/register';
import {TabsPage} from '../tabs/tabs';
import {DataService} from "../../app/core/service/data.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {

  loginForm: FormGroup;
  showPhoneBox: boolean = true;
  isShowOtherWay: boolean = true;
  loginStatus: boolean = true;
  changeText: string = '短信验证码登录';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public  formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public dataService: DataService
  ) {
    this.loginForm = this.formBuilder.group({
      phoneNumber: ['', Validators.compose([Validators.required])],
      pwd: ['', Validators.compose([Validators.required])],
      msgCode: ['']
    })
  }

  blurInput() {
    this.showPhoneBox = false;
  }

  focusInput() {
    this.showPhoneBox = true;
  }

  changeStatus() {
    this.loginStatus = !this.loginStatus;
    this.changeText = this.loginStatus ? '短信验证码登录' : '密码登录';
    this.loginForm.controls['pwd'].setValue('');
    this.loginForm.controls['msgCode'].setValue('');
    if (this.loginStatus) {
      this.loginForm.controls['msgCode'].clearValidators();
      this.loginForm.controls['msgCode'].updateValueAndValidity();
      this.loginForm.controls['pwd'].setValidators([Validators.required]);
      return;
    }
    this.loginForm.controls['pwd'].clearValidators();
    this.loginForm.controls['pwd'].updateValueAndValidity();
    this.loginForm.controls['msgCode'].setValidators([Validators.required]);
  }

  toastTips(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      cssClass: 'mini',
      position: 'middle',
      duration: 2000
    })
    toast.present();
  }

  checkMsCode() {

    const userName = this.loginForm.controls['phoneNumber'].value;
    const password = this.loginForm.controls['pwd'].value;
    const captcha = "";
    if (!userName) {
      let msg = '手机号码不能为空';
      this.toastTips(msg);
      return;
    }

    if (!this.isPhone()) {
      let msg = '手机号码格式不正确';
      this.toastTips(msg);
      return;
    }

    // if(!this.loginForm.controls['msgCode'].value) {
    //   let msg = '验证码不能为空';
    //   this.toastTips(msg);
    //   return;
    // }
    this.dataService.postData("auth", {userName, password, captcha}).subscribe(res => {
      if (res.code !== '0') {
        // this.getCaptcha();
        this.toastTips(res.message);
      } else {
        this.dataService.setStore('authorization', res.data);
        this.getHeadImg();
        this.getUserInfo();
        this.navCtrl.setRoot(TabsPage);
      }
    });
  }

  sendMsgCode() {
    if (!this.loginForm.controls['phoneNumber'].value) {
      let msg = '手机号码不能为空';
      this.toastTips(msg);
      return;
    }
    if (!this.isPhone()) {
      let msg = '手机号码格式不正确';
      this.toastTips(msg);
      return;
    }
  }

  forbidden() {
    return false;
  }

  isPhone() {
    let flag = this.loginForm.controls['phoneNumber'].value
      && /(^1[3|4|5|6|7|8]\d{9}$)|(^09\d{8}$)/.test(this.loginForm.controls['phoneNumber'].value);
    return flag;

  }

  toRegister() {
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  getHeadImg() {
    this.dataService.getData('users/headImg').subscribe(
      res => {
        if (null != res && res.code === '0' && res.data != null) {
          this.dataService.setStore('headImg', 'data:image/jpg;base64,' + res.data);
        }
      }
    );
  }

  getUserInfo() {
    this.dataService.getData('users/myinfo').subscribe(res => {
      if (null != res && res.code === '0' && res.data != null) {
        this.dataService.setStore('userInfo', res.data);
      }
    });
  }
}
