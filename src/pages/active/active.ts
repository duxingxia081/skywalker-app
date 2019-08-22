import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import {CreateActivePage} from '../create-active/create-active';
import {ActiveDetailPage} from '../active-detail/active-detail';
import {BASE_URL} from "../../config";
import {DataService} from "../../app/core/service/data.service";


@Component({
  selector: 'page-active',
  templateUrl: 'active.html'
})
export class ActivePage implements OnInit, OnChanges {

  @ViewChild(Slides) slides: Slides;
  activeId = 1000000;
  type = 0;
  listActivity: Array<any>;
  objSelf = {};
  BASE_URL = BASE_URL;

  constructor(
    public navCtrl: NavController,
    public dataProvider: DataService
  ) {
  }

  ngOnInit() {
    this.getActivities();
  }

  ngOnChanges() {
    this.activeId = 1000000;
    this.getActivities();
  }
  loadData(event) {
    this.getActivities(event);
  }
  // 请求活动数据
  getActivities(event?) {
    const params = {
      'activeId': this.activeId,
      'activityType': this.type
    };
    this.dataProvider.getData('activity', params).subscribe(
      res => {
        if (null != res && res.code === '0' && res.data != null) {
          if (event) {
            const newData: Array<any> = res.data.list;
            this.listActivity = this.listActivity.concat(newData);
            event.target.complete();
            if (res.data.list.length <= 5) {
              event.target.disabled = true;
            }
          }
          else {
            this.listActivity = res.data.list;
          }
          this.getLastActiveId();
        }
      })
  }
  getLastActiveId() {
    if (null != this.listActivity && this.listActivity.length !== 0) {
      const lastActivity: any = this.listActivity[this.listActivity.length - 1];
      this.activeId = lastActivity.activeId;
    }
  }
  goCreateTrval() {
    this.navCtrl.push(CreateActivePage);
  }

  goDetailPage(obj) {
    this.navCtrl.push(ActiveDetailPage, {params: obj});
  }

  doInfinite1(infiniteScroll) {
    setTimeout(() => {
      infiniteScroll.complete();
    }, 300)
  }


  ionViewDidEnter() {
    this.slides.startAutoplay();
    this.slides.autoplayDisableOnInteraction = false;
  }

  //页面离开时停止自动播放
  ionViewDidLeave() {
    this.slides.stopAutoplay();
  }

}
