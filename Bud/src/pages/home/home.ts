import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  post: string;
  cards: any;
  category: string = 'gear';

  constructor(public navCtrl: NavController) {

      this.cards = new Array(10);

  }
}