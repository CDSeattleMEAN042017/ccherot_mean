import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from './../note' 
@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {

  notes:Array<Note>

  newNote = new Note()

  constructor(private _noteService:NoteService) { }

  ngOnInit() {
    this.notes = this._noteService.getNotes()
  }

  onSubmit()
  {
    this.newNote.id = Math.floor(Math.random() * 4)
    this.newNote.dateCreated = new Date()
    this.newNote.dateUpdated = new Date()
    this._noteService.addNote(this.newNote)
    this.newNote = new Note()
  }

}
