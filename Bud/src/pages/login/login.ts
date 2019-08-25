import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    
    this.navCtrl.push(HomePage);
  }

  goRegister(){
    this.navCtrl.push(RegisterPage);
  }
}
