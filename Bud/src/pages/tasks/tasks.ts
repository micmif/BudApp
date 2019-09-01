import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddTaskPage } from '../add-task/add-task';
import { ViewTaskPage } from '../view-task/view-task';
import { TaskService } from '../../providers/task-service/task-service';

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  public tasks = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public taskService: TaskService) {

  this.taskService.getTask().then((todos) => {

    if(todos){
      this.tasks = todos; 
    }

  });

  }

  ionViewDidLoad(){

  }

  addTask(){

    let addModal = this.modalCtrl.create(AddTaskPage);
      addModal.onDidDismiss((task) => {

        if(task){
          this.saveTask(task);
        }

    });
    
    addModal.present();
  }

  saveTask(task){
    this.tasks.push(task);
    this.taskService.save(this.tasks);
  }

  viewTask(task){
    this.navCtrl.push(ViewTaskPage, {
      task: task
    });
  }
}
