import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LoginProvider } from '../login/login';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http, public loginProvider: LoginProvider) {
    console.log('Hello HttpProvider Provider');
  }

getUserApi(){
 return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Authorization','Bearer '  + this.loginProvider.token);
 
      this.http.get('https://yc-project.herokuapp.com/login', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
 
}


}
