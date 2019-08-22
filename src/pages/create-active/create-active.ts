import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { CreateLinePage } from '../create-line/create-line';


@Component({
  selector: 'page-create-active',
  templateUrl: 'create-active.html',
})
export class CreateActivePage {

  isSelect: boolean = true;
  showChoosePayType: boolean = false;
  myDate: any;
  allDay: number = 0;
  chooseCreateType: any;
  ulWidth: string = '1200px';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    this.initData();
  }

  initData() {
    let data = [
      {
        imgPath: 'assets/imgs/slide0.jpg',
        title: '推荐'
      },
      {
        imgPath: 'assets/imgs/slide0.jpg',
        title: '自驾游'
      },
      {
        imgPath: 'assets/imgs/slide0.jpg',
        title: '户外约伴'
      },
      {
        imgPath: 'assets/imgs/slide0.jpg',
        title: '户外约伴1'
      },
      {
        imgPath: 'assets/imgs/slide0.jpg',
        title: '户外约伴1'
      },
      {
        imgPath: 'assets/imgs/slide0.jpg',
        title: '户外约伴1'
      },
      {
        imgPath: 'assets/imgs/slide0.jpg',
        title: '户外约伴1'
      },
      {
        imgPath: 'assets/imgs/slide0.jpg',
        title: '户外约伴2'
      }
    ];
    this.ulWidth = data.length * 145 - 10 +'px';
    this.chooseCreateType = data;
  }

  reduceDay() {
    this.allDay ? this.allDay-- : '';
  }

  addDay() {
    this.allDay++;
  }

  goCreateLine() {
    this.navCtrl.push(CreateLinePage);
  }

  closeByMask() {
    this.showChoosePayType = false;
  }

  changePayType() {
    this.isSelect = !this.isSelect;
  }

  goSelectPyType() {
    // const modal = this.modalCtrl.create(ChoosePayTypePage, {});
    // modal.present();
    this.showChoosePayType = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateActivePage');
    
  }

}
