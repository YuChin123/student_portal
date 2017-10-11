import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { SMS } from '@ionic-native/sms';
import { HttpProvider } from '../../providers/http/http'


/**
 * Generated class for the TutorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var window; 

@IonicPage()
@Component({
  selector: 'page-tutor',
  templateUrl: 'tutor.html',
})
export class TutorPage {
 
 phoneNumber : any; 
 message: string;
courses: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sms: SMS, public httpProvider : HttpProvider) {
  }

sendSMS(){
    var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               intent: 'INTENT'  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    }

this.sms.send('0174240345', 'Hello world!',options)
      .then(()=>{
        alert("success");
      },()=>{
      alert("failed");
      });
  }
 
 callIT(passedNumber){
    //You can add some logic here
     window.location = passedNumber;
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
this.navCtrl.push(DashboardPage)
}

}

