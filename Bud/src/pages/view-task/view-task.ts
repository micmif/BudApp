import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-task',
  templateUrl: 'view-task.html',
})
export class ViewTaskPage {

  title;
  description;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('task').title;
    this.description = this.navParams.get('task').description;
  }
  

}
