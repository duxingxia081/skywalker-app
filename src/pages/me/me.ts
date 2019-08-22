import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MeSettingPage} from '../me-setting/me-setting';
import {MeMyActivePage} from '../me-my-active/me-my-active';
import {UserInfo} from "../../app/core/class/userinfo";
import {DataService} from "../../app/core/service/data.service";

@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage extends UserInfo {

  constructor(protected dataService: DataService, protected navCtrl: NavController, private navParams: NavParams) {
    super(navCtrl,dataService);
  }

  goSettingPage() {
    this.navCtrl.push(MeSettingPage);
  }

  goMyActivePage() {
    this.navCtrl.push(MeMyActivePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }

}
