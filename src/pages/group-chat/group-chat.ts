import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PeopleListPage } from '../people-list/people-list';

/**
 * Generated class for the GroupChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-group-chat',
  templateUrl: 'group-chat.html',
})
export class GroupChatPage {

  chatData: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.fakeData();
  }

  fakeData() {
    let data = [
      {
        content:  '在吗?',
        sendTime: '2018-10-10 18:20',
        imgPath: '',
        selfSend: false,
      },
      {
        content: '今天去哪里玩',
        sendTime: '2018-10-10 18:20',
        imgPath: '',
        selfSend: false,
      },
      {
        content: '今天好无聊啊，出来吹吹水啊，无聊到都不知道干嘛了，你还不出来跟我聊天啊， 阿里阿第三方加拉斯京东客服',
        sendTime: '2018-10-10 18:20',
        imgPath: '',
        selfSend: false,
      },
      {
        content: '不想跟你去玩',
        sendTime: '2018-10-10 18:20',
        imgPath: '',
        selfSend: true,
      },
      {
        content: '斯科拉多就福利卡三等奖弗朗克阿萨德发的是发多少从v阿萨德才按时发但是',
        sendTime: '2018-10-10 18:20',
        imgPath: '',
        selfSend: true,
      },
    ];
    this.chatData = data;
  }

  goChatInfo() {
    this.navCtrl.push(PeopleListPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupChatPage');
  }

}
