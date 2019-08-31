import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    console.log("Username: "+this.email);
    console.log("Password: "+ this.password);

    this.navCtrl.setRoot(HomePage);
  }

  goRegister(){
   this.navCtrl.push(RegisterPage);
  }
}