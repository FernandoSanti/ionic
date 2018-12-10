import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  item = [
    {id: 1, tittle: 'Curso 1', description: 'curso uno'}
   ];
  site = {
    curso: "Programacion en ionic",
    personas: "25",
    descripcion: "Ven a nuestro curso aprender a programar en ionic",
    curson: "new"
  };
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    
  //this.db.list('site').push(this.site);
    
}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
  click(){
    this.navCtrl.push("AgregarPage");
  }

}
