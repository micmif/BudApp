import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { NotesPage } from '../pages/notes/notes';
import { AddNotePage } from '../pages/add-note/add-note';
import { ViewNotePage } from '../pages/view-note/view-note';
import { TasksPage } from '../pages/tasks/tasks';
import { AddTaskPage } from '../pages/add-task/add-task';
import { ViewTaskPage } from '../pages/view-task/view-task';
import { RulesPage } from '../pages/rules/rules';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NoteService } from '../providers/note-service/note-service';
import { TaskService } from '../providers/task-service/task-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    RulesPage,
    NotesPage,
    AddNotePage,
    ViewNotePage,
    TasksPage,
    AddTaskPage,
    ViewTaskPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    RulesPage,
    NotesPage,
    AddNotePage,
    ViewNotePage,
    TasksPage,
    AddTaskPage,
    ViewTaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteService,
    TaskService
    ]
})
export class AppModule {}
