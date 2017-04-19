import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from './../note'

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes:Array<Note>

  constructor(private _noteService:NoteService) { }

  ngOnInit() {
    this.notes = this._noteService.getNotes()
  }

  onClickEdit(note)
  {
    console.log("onClickEdit > ", note)
    this._noteService.markNoteForEdit(note)
    //this._noteService.messageToEdit = noteToEdit.message
  }

  onClickDelete(noteToDelete)
  {
    this._noteService.deleteNote(noteToDelete)
  }

}
