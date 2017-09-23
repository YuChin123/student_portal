import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { ListPage } from '../list/list';
import { LoginProvider } from '../../providers/login/login'

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

email: any; 
password: any; 
loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider : LoginProvider, public loadingController : LoadingController) {
  }
 itemTapped(){

 this.showLoader();
 
        let credentials = {
            email: this.email,
            password: this.password
        };
 
        this.loginProvider.login(credentials).then((result) => {
            this.loading.dismiss();
            console.log(result);
            this.navCtrl.setRoot(ListPage);
        }, (err) => {
            this.loading.dismiss();
            console.log(err);
        });

}
showLoader(){
 
        this.loading = this.loadingController.create({
            content: 'Authenticating...'
        });
 
        this.loading.present();
 
    }


}
