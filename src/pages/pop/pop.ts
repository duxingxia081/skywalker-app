import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pop',
  templateUrl: 'pop.html',
})
export class PopPage {

  buttons = [
    {
      text: '',
      handle: function() {

      }
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.buttons = this.navParams.get('buttons');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopPage');
  }

}
