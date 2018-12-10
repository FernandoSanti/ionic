import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../services/notes.service'

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  
  //note = {id: null, title: null, description: null};
  note:any ={id: null, title: null, description: null, description1: null,
     descricion: null,instructor: null, duracion: null, fechaI: null, 
     fechaF: null, lugar: null,  costo: null, observacion: null}
  //note = {};
  id:null;
  show = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public NotesService: NotesService) {
    this.id = navParams.get('id');
    if(this.id != 0){
      NotesService.getNote(this.id).valueChanges().subscribe(note => {
        this.note = note;
      });
    }
  }

  addNote(){
    if(this.id != 0){
      this.NotesService.editNote(this.note);
      alert('curso editado con exito');
    }else{
    this.note.id = Date.now();
    this.NotesService.createNote(this.note);
    alert('curso creado con exito');
    }
    this.navCtrl.pop();
  }

  deleteNote(){
    this.show = false;
    this.NotesService.deleteNote(this.note);
    alert('curso eliminado con exito'+this.note);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad DetailPage');
    
  }

}
