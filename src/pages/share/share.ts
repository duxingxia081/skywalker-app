import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-share',
  templateUrl: 'share.html'
})
export class SharePage {
  notes : any
  constructor(public navCtrl: NavController) {
    this.initData();
  }

  initData(){
    let notes = [
      {
        title: '高山大海一路前行，一次别致的户外徒步',
        tag: '攻略',
        author: '伊周',
        pos: '丽江 大理 鲤鱼湖',
        publishTime: '2019-10-01',
        collectionNum: '3215',
        messageNum: '67'
      },
      {
        title: '高山大海一路前行，一次别致的户外徒步',
        tag: '攻略',
        author: '伊周',
        pos: '丽江 大理 鲤鱼湖',
        publishTime: '2019-10-01',
        collectionNum: '3215',
        messageNum: '67'
      },
      {
        title: '高山大海一路前行，一次别致的户外徒步',
        tag: '攻略',
        author: '伊周',
        pos: '丽江 大理 鲤鱼湖',
        publishTime: '2019-10-01',
        collectionNum: '3215',
        messageNum: '67'
      },
      {
        title: '高山大海一路前行，一次别致的户外徒步',
        tag: '攻略',
        author: '伊周',
        pos: '丽江 大理 鲤鱼湖',
        publishTime: '2019-10-01',
        collectionNum: '3215',
        messageNum: '67'
      },
      {
        title: '高山大海一路前行，一次别致的户外徒步',
        tag: '攻略',
        author: '伊周',
        pos: '丽江 大理 鲤鱼湖',
        publishTime: '2019-10-01',
        collectionNum: '3215',
        messageNum: '67'
      }
    ]
    this.notes = notes;
  }

}
