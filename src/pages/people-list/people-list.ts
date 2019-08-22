import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MorePeopleListPage } from '../more-people-list/more-people-list';

@Component({
  selector: 'page-people-list',
  templateUrl: 'people-list.html',
})
export class PeopleListPage {


  noBorder: boolean = false;
  topChat: boolean = false;
  saveToList: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goMorePeople() {
    this.navCtrl.push(MorePeopleListPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleListPage');
  }

}
