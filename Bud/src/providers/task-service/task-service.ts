import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class TaskService {

  constructor(public storage: Storage){
    
  }

  getTask(){
    return this.storage.get('todos');
  }

  save(task){
    this.storage.set('todos', task);
  }

}
