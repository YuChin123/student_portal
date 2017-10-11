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
 
  public tap: number = 0;

courses:any;
getNewsApi: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider : HttpProvider) {

  }

    tapEvent(e) {
    this.tap++
  }
 
  ionViewDidLoad() {
      this.httpProvider.getNewsApi().then((data) => {
          this.courses = data;
          console.log(this.courses)
    }, (err) => {
        console.log("not allowed");
    });
  }
itemTapped(){
  this.navCtrl.push(TutorPage);
}

}
