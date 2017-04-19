import { NoteService } from './note/note.service';
import { Component, Input } from '@angular/core';
import { Note } from './note/note'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Always Notes';

  editNotes:Array<Note>

  constructor (private _noteService:NoteService){}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.editNotes = this._noteService.editNotes
  }
}
