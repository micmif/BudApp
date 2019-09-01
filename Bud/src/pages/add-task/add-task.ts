import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {

  title: string;
  description: string;

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams) {
  }

  saveTask(){

    let newTask = {
      title: this.title,
      description: this.description
    };

    this.view.dismiss(newTask);
    
  }

  close(){
    this.view.dismiss();
  }

}
