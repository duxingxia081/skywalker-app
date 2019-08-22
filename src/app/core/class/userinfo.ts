import {DataService} from '../service/data.service';
import {NavController} from "ionic-angular";
import {LoginPage} from "../../../pages/login/login";

export class UserInfo {
  public authorization: string;
  public userInfo: any;
  public imgBaseUrl = 'assets/imgs/slide1.jpg';

  constructor(protected navCtrl: NavController, protected dataService: DataService) {
    this.getAuthorization();
    this.getUserInfo();
    if (!this.authorization) {
      this.navCtrl.push(LoginPage);
    }
  }

  getAuthorization() {
    this.authorization = this.dataService.getStore('authorization');
  }

  getUserInfo() {
    if (this.authorization) {
      this.userInfo = JSON.parse(this.dataService.getStore('userInfo'));
      this.imgBaseUrl = this.dataService.getStore('headImg');
    }
  }
}
