import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    /*geolocation.getCurrentPosition(function(resp){
      console.log("Latitude: ", resp.coords.latitude);
      console.log("Longitude: ", resp.coords.longitude);
    });*/

  }

}

