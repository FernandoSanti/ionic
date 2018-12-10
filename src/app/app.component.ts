import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from "firebase";


import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
 // rootPage: string = 'InicioPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    var config = {
      apiKey: "AIzaSyCNsRxHWRGn8iuK2TGLKy3sG2d6jxXtOIk",
      authDomain: "proyecto-ed4bf.firebaseapp.com",
      databaseURL: "https://proyecto-ed4bf.firebaseio.com",
      projectId: "proyecto-ed4bf",
      storageBucket: "proyecto-ed4bf.appspot.com",
      messagingSenderId: "89833759735"
    };
    firebase.initializeApp(config);
  }
}
