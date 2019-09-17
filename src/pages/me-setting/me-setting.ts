import {Component} from '@angular/core';
import {NavController, NavParams, ActionSheetController, AlertController,ToastController} from 'ionic-angular';
import {UserInfo} from "../../app/core/class/userinfo";
import {DataService} from "../../app/core/service/data.service";

@Component({
  selector: 'page-me-setting',
  templateUrl: 'me-setting.html',
})
export class MeSettingPage extends UserInfo {

  type: string = 'myInfo';
  gaming: string = 'boy';
  isNeedCer: boolean = true;
  accountFind: boolean = true;
  telFind: boolean = true;
  seeMyInfo: string = "all"; // 个人信息查看权限
  shareContent: string = "onlyFriend"; // 分享内容查看权限
  attendActive: string = "onlyMe"; // 参与发布活动查看权限
  gender:string = "male";

  constructor(
    protected navCtrl: NavController,
    private navParams: NavParams,
    private actionSheet: ActionSheetController,
    protected dataService: DataService,
    public toastCtrl: ToastController,
    private alertController:AlertController
  ) {
    super(navCtrl,dataService);
    console.log(this.userInfo);
  }

  getNickName(nickName:HTMLInputElement){
    return nickName.value;
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

  async nickName() {
    const nickName = await this.alertController.create({
      title: '修改昵称',
      inputs: [
        {
          name: 'nick',
          type: 'text',
          placeholder: '请输入昵称'
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (nick) => {
            console.log(nick);
          }
        }, 
        {
          text: '确定',
          handler: (res) => {
            console.log(res);
            //nickName.value = res.nick;
          }
        }
      ]
    });

    await nickName.present();
  }

  async password(){
    const password = await this.alertController.create({
      title:'修改密码',
      inputs: [
        {
          name:'oldPassword',
          type:'password',
          placeholder:'请输入旧密码'
        },
        {
          name:'newPassword',
          type:'password',
          placeholder:'请输入新密码'
        },
        {
          name:'newPasswordAgain',
          type:'password',
          placeholder:'请确认新密码'
        }
      ],
      buttons:[
        {
          text:'取消',
          role:'cancel',
          cssClass: 'secondary',
          handler:()=>{
            console.log('Cancel');
          }
        },{
          text:'确定',
          handler:(res)=>{
            console.log(res);
            if(res.newPassword !== res.newPasswordAgain){
              let msg = '两次输入的密码不一致';
              this.toastTips(msg);
            }
          }
        }
      ]
    });
    await password.present();
  }

  async mobilePhone(){
    const mobilePhone = await this.alertController.create({
      title:'修改手机号',
      inputs:[
        {
          name:'mobilePhone',
          type:'text',
          placeholder:'请输入新手机号码'
        }
      ],
      buttons:[
        {
          text:'取消',
          role:'cancel',
          cssClass:'secondary',
          handler:()=>{
            console.log('取消');
          }
        },
        {
          text:'确定',
          handler:()=>{
            console.log('确定');
          }
        }
      ]
    });
    await mobilePhone.present();
  }

  async weChat(){
    const weChat = await this.alertController.create({
      title:'微信',
      inputs:[
        {
          name:'weChat',
          type:'text',
          placeholder:'请输入微信号',
        }
      ],
      buttons:[
        {
          text:'取消',
          role:'cancel',
          cssClass:'secondary',
          handler:()=>{
            console.log('取消');
          }
        },
        {
          text:'确定',
          handler:(res)=>{
            console.log(res);
          }
        }
      ]
    });
    await weChat.present();
  }

  async qq(){
    const qq = await this.alertController.create({
      title:'QQ',
      inputs:[
        {
          name:'weChat',
          type:'text',
          placeholder:'请输入QQ号',
        }
      ],
      buttons:[
        {
          text:'取消',
          role:'cancel',
          cssClass:'secondary',
          handler:()=>{
            console.log('取消');
          }
        },
        {
          text:'确定',
          handler:(res)=>{
            console.log(res);
          }
        }
      ]
    });
    await qq.present();
  }

  async sign() {
    const nickName = await this.alertController.create({
      title: '修改签名',
      inputs: [
        {
          name: 'sign',
          type: 'text',
          placeholder: '请填写签名'
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (sign) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: '确定',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await nickName.present();
  }

  async account() {
    const account = await this.alertController.create({
      title: '账号修改',
      subTitle: '该账号只允许修改一次，请谨慎处理',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: '请填写账号'
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: '确定',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await account.present();
  }

  async area() {
    const area = await this.alertController.create({
      title: '修改地区',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: '请输入地区'
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: '确定',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await area.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeSettingPage');
  }

  getUserImg() {
    const as = this.actionSheet.create({
      title: '选择头像',
      buttons: [
        {
          text: '拍照',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '历史头像',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: '相册',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: '关闭',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })
    as.present();
  }

  getQrCodeImage() {
    const as = this.alertController.create({
      title: '个人二维码',
      message: "123"
    })
    as.present();
  }

}
