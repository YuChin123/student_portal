import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TutorPage } from '../tutor/tutor'; 
import { HttpProvider } from '../../providers/http/http'
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

course:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider : HttpProvider) {

  }
 
  ionViewDidLoad() {
      this.httpProvider.getUserApi().then((data) => {
          this.course = data;
          console.log(this.course)
    }, (err) => {
        console.log("not allowed");
    });
  }
itemTapped(){
  this.navCtrl.push(TutorPage);
}

}
