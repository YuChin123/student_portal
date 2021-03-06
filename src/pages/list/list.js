var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TutorPage } from '../tutor/tutor';
import { HttpProvider } from '../../providers/http/http';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListPage = (function () {
    function ListPage(navCtrl, navParams, httpProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
    }
    ListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.httpProvider.getUserApi().then(function (data) {
            _this.user = data;
            console.log(_this.user);
        }, function (err) {
            console.log("not allowed");
        });
    };
    ListPage.prototype.itemTapped = function () {
        this.navCtrl.push(TutorPage);
    };
    return ListPage;
}());
ListPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-list',
        templateUrl: 'list.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, HttpProvider])
], ListPage);
export { ListPage };
//# sourceMappingURL=list.js.map