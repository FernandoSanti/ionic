import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../services/notes.service';
import { DetailPage } from '../detail/detail';

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  notes = [];

  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public navParams: NavParams, public notesService: NotesService) {
    notesService.getNotes()
      .valueChanges().subscribe(notas => {
        console.log(notas)
        this.notes = notas;
    });
  }

  public goToDetail(id){
    this.navCtrl.push(DetailPage, {id:id});
  }

  public createNote(id){
    this.navCtrl.push(DetailPage, {id:0});
  }

}
