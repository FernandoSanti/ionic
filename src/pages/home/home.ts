import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from "firebase";
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario = {
    email: "",
    password: ""
  };
  
  constructor(public navCtrl: NavController, public alert: AlertController) {
    
  }

  register(usuario){
    firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.password).then(data => {
      let alert = this.alert.create({
        title: 'Correcto',
        subTitle: 'Gracias',
        buttons: ['aceptar']
      });
      alert.present();
    });
  }
  login(usuario){
    firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.password).then(data => {
      
      let alert = this.alert.create({
        title: 'Correcto',
        subTitle: 'ah iniciado seccion.',
        buttons: ['aceptar']
      });
      this.navCtrl.push("InicioPage");
      alert.present();
    });

  }
  forgot(email){
    firebase.auth().sendPasswordResetEmail(email).then(function() {
      let alert = this.alert.create({
        title: 'Correcto',
        subTitle: 'se ah enviado un correo',
        buttons: ['aceptar']
      });
      alert.present();
    }).catch(function(error) {
      let alert = this.alert.create({
        title: 'error',
        subTitle: 'ah ocurrido un error',
        buttons: ['aceptar']
      });
      alert.present();
    });
  }
}
