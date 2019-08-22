import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateActivePage } from '../create-active/create-active';
import { ActiveDetailPage } from '../active-detail/active-detail';
import {DataService} from "../../app/core/service/data.service";

@Component({
  selector: 'page-me-my-active',
  templateUrl: 'me-my-active.html',
})
export class MeMyActivePage {

  activeType: string = 'myCreateActive';
  obj: any;
  objSelf = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dataProvider: DataService
  ) {
    this.initData();
    this.getActive();
  }

  goCreate() {
    this.navCtrl.push(CreateActivePage);
  }

  initData() {
    let obj = [
      {
        title: '去一个好玩的地方啊嗷嗷待食开发简历都是开飞机安联大厦',
        who: '米宝贝',
        type: '自驾游',
        pos: '丽江 大理 鲤鱼湖',
        startDate: '2019-10-01',
        howLong: '10',
        pay: 'AA',
        commentNum: '5200',
        goodNum: '5200',
      },
      {
        title: '去一个好玩的地方啊嗷嗷待食开发简历都是开飞机安联大厦',
        who: '米宝贝',
        type: '自驾游',
        pos: '丽江 大理 鲤鱼湖',
        startDate: '2019-10-01',
        howLong: '10',
        pay: 'AA',
        commentNum: '5200',
        goodNum: '5200',
      },
      {
        title: '去一个好玩的地方啊嗷嗷待食开发简历都是开飞机安联大厦发的说法萨达发手动阀手动阀手动阀',
        who: '米宝贝',
        type: '自驾游',
        pos: '丽江 大理 鲤鱼湖',
        startDate: '2019-10-01',
        howLong: '10',
        pay: 'AA',
        commentNum: '5200',
        goodNum: '5200',
      },
      {
        title: '去一个好玩的地方啊嗷嗷待食开发简历都是开飞机安联大厦',
        who: '米宝贝',
        type: '自驾游',
        pos: '丽江 大理 鲤鱼湖',
        startDate: '2019-10-01',
        howLong: '10',
        pay: 'AA',
        commentNum: '5200',
        goodNum: '5200',
      },
      {
        title: '去一个好玩的地方啊嗷嗷待食开发简历都是开飞机安联大厦',
        who: '米宝贝',
        type: '自驾游',
        pos: '丽江 大理 鲤鱼湖',
        startDate: '2019-10-01',
        howLong: '10',
        pay: 'AA',
        commentNum: '5200',
        goodNum: '5200',
      },
      {
        title: '去一个好玩的地方啊嗷嗷待食开发简历都是开飞机安联大厦',
        who: '米宝贝',
        type: '自驾游',
        pos: '丽江 大理 鲤鱼湖',
        startDate: '2019-10-01',
        howLong: '10',
        pay: 'AA',
        commentNum: '5200',
        goodNum: '5200',
      },
      {
        title: '去一个好玩的地方啊嗷嗷待食开发简历都是开飞机安联大厦',
        who: '米宝贝',
        type: '自驾游',
        pos: '丽江 大理 鲤鱼湖',
        startDate: '2019-10-01',
        howLong: '10',
        pay: 'AA',
        commentNum: '5200',
        goodNum: '5200',
      },
    ];

    let objSelf = [
      {
        title: '深圳自驾游召集组队中的发生发的是',
        pos: '深圳 南山 腾讯大厦',
        startDate: '2019-10-8',
        perpleNum: '12+',
        goodNum: '5200',
        commentNum: '5200'
      },
      {
        title: '深圳自驾游召集组队中的发生发的是',
        pos: '深圳 南山 腾讯大厦',
        startDate: '2019-10-8',
        perpleNum: '12+',
        goodNum: '5200',
        commentNum: '5200'
      },
      {
        title: '深圳自驾游召集组队中的发生发的是',
        pos: '深圳 南山 腾讯大厦',
        startDate: '2019-10-8',
        perpleNum: '12+',
        goodNum: '5200',
        commentNum: '5200'
      },
      {
        title: '深圳自驾游召集组队中的发生发的是',
        pos: '深圳 南山 腾讯大厦',
        startDate: '2019-10-8',
        perpleNum: '12+',
        goodNum: '5200',
        commentNum: '5200'
      },
      {
        title: '深圳自驾游召集组队中的发生发的是',
        pos: '深圳 南山 腾讯大厦',
        startDate: '2019-10-8',
        perpleNum: '12+',
        goodNum: '5200',
        commentNum: '5200'
      },
      {
        title: '深圳自驾游召集组队中的发生发的是',
        pos: '深圳 南山 腾讯大厦',
        startDate: '2019-10-8',
        perpleNum: '12+',
        goodNum: '5200',
        commentNum: '5200'
      },
      {
        title: '深圳自驾游召集组队中的发生发的是',
        pos: '深圳 南山 腾讯大厦',
        startDate: '2019-10-8',
        perpleNum: '12+',
        goodNum: '5200',
        commentNum: '5200'
      },
    ];
    this.objSelf = objSelf;
    this.obj = obj;
  }

  getActive() {
    let data = 1;
    this.dataProvider.getData('activity',{'data': data}).subscribe((data) => {
      //需要增加统一错误提示
      this.obj=data.data.list;
      console.log(data);
      console.log("*******");
      console.log(data.data.list);
      for (let a of data.data.list)
      {
        console.log(a);
        console.log(a.activeTitle);
        console.log(a.listActiveImgDTO.length)
      }
    })
  };

  goDetailPage() {
    this.navCtrl.push(ActiveDetailPage, {comeInSelf: true});
  }

  editActive() {
    alert('click editActive btn');
  }

  stopActive() {
    alert('click stopActive btn');
  }
  
  deleteActive() {
    alert('click deleteActive btn');
  }

  doInfinite(infiniteScroll) {
    setTimeout (() => {
      infiniteScroll.complete();
    }, 1000)
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MeMyActivePage');
  }

}

