import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { PeopleListPage } from '../people-list/people-list';
import { CreateActivePage } from '../create-active/create-active';
import { TravelLineDetailPage } from '../travel-line-detail/travel-line-detail';
import { GroupChatPage } from '../group-chat/group-chat';
import { PopPage } from '../pop/pop';

@Component({
  selector: 'page-active-detail',
  templateUrl: 'active-detail.html',
})
export class ActiveDetailPage {

  data: any;
  isShowCommentDiv: boolean = false;
  comeInSelf: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController

  ) {
    let comeInParams = this.navParams.get('comeInSelf');
    this.comeInSelf = comeInParams ? comeInParams:'';
    this.data = this.navParams.get('params');
  }

  goGroupChat() {
    this.navCtrl.push(GroupChatPage);
  }

  clickAddBtn() {
    this.isShowCommentDiv = !this.isShowCommentDiv;
  }

  getSettingOptions(event) {
    const popover = this.popoverCtrl.create(PopPage, {
      buttons: [
        {
          text: '编辑活动',
          handle: function() {
            alert('click edit btn');
            popover.dismiss();
          }          
        },
        {
          text: '取消活动',
          handle: function() {
            alert('click cancle btn');
            popover.dismiss();
          }
        },
        {
          text: '退出活动',
          handle: function() {
            alert('click exit btn');
            popover.dismiss();
          }
        }
      ]
    },
    {
      cssClass: 'mini',
    })
    popover.present({
      ev: event
    });
  }

  goTravelDetail() {
    this.navCtrl.push(TravelLineDetailPage);
  }

  goCreateTrval() {
    this.navCtrl.push(CreateActivePage);
  }

  goPeopleList() {
    this.navCtrl.push(PeopleListPage);
  }

  ionViewDidLoad() {
  }

}
