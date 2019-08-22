import {Component} from '@angular/core';
import {NavController, NavParams, ActionSheetController} from 'ionic-angular';
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

  constructor(
    protected navCtrl: NavController,
    private navParams: NavParams,
    private actionSheet: ActionSheetController,
    protected dataService: DataService
  ) {
    super(navCtrl,dataService);
    console.log(this.userInfo);
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

}
