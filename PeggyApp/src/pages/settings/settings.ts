import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Navbar } from 'ionic-angular';
import {ChangePasswordPage} from "../change-password/change-password";
import {AddNewUserPage} from "../add-new-user/add-new-user";
import {DeleteUserPage} from "../delete-user/delete-user";


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  @ViewChild(Navbar) navBar: Navbar;
  public user;
  public tokenSession;
  public peggyUUID;
  public callback;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {
    platform.ready().then(() => {
      this.user = this.navParams.get('user');
      this.callback = this.navParams.get('callback');
      this.peggyUUID = this.navParams.get('peggyUUID');
      this.tokenSession = this.navParams.get('tokenSession');
    });
  }

  goToChangePassword = () =>{
    this.navCtrl.push(ChangePasswordPage,{user: this.user, callback: this.callback, tokenSession: this.tokenSession, peggyUUID: this.peggyUUID});
  };

  goToAddNewUser = () =>{
    this.navCtrl.push(AddNewUserPage,{user: this.user, callback: this.callback, tokenSession: this.tokenSession, peggyUUID: this.peggyUUID});
  };

  goToDeleteUser = () => {
    this.navCtrl.push(DeleteUserPage,{user: this.user, callback: this.callback, tokenSession: this.tokenSession, peggyUUID: this.peggyUUID});
  };
  ionViewDidLoad = () => {
    console.log('ionViewDidLoad SettingsPage');
    this.navBar.backButtonClick =(e:UIEvent) =>{
      this.callback(this.user, this.peggyUUID, this.tokenSession).then(()=>{
        this.navCtrl.pop();
      });
    };
  };

}
