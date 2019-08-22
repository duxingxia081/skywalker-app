import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  loginForm: FormGroup;
  isCheck: boolean = false;
  showPwd: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public  formBuilder: FormBuilder,
    public toastCtrl: ToastController
  ) {
    this.loginForm = this.formBuilder.group({
      phoneNumber: ['', Validators.compose([Validators.required])],
      pwd: ['', Validators.compose([Validators.required])],
      msgCode: [''],
      isCheck: [true]
    })
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

    if(!this.loginForm.controls['isCheck'].value) {
      let msg = "请勾选同意使用条款";
      this.toastTips(msg);
      return;
    };

    if(!this.loginForm.controls['phoneNumber'].value) {
      let msg = '手机号码不能为空';
      this.toastTips(msg);
      return;
    }

    if(!this.isPhone()) {
      let msg = '手机号码格式不正确';
      this.toastTips(msg);
      return;
    }

    if(!this.loginForm.controls['pwd'].value) {
      let msg = '密码不能为空';
      this.toastTips(msg);
      return;
    }

    if(!this.loginForm.controls['msgCode'].value) {
      let msg = '验证码不能为空';
      this.toastTips(msg);
      return;
    }

  }

  sendMsgCode() {
    if(!this.loginForm.controls['phoneNumber'].value) {
      let msg = '手机号码不能为空';
      this.toastTips(msg);
      return;
    }
    if(!this.isPhone()) {
      let msg = '手机号码格式不正确';
      this.toastTips(msg);
      return;
    }
  }

  isPhone() {
    let flag = this.loginForm.controls['phoneNumber'].value
      && /(^1[3|4|5|6|7|8]\d{9}$)|(^09\d{8}$)/.test(this.loginForm.controls['phoneNumber'].value);
    return flag;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
