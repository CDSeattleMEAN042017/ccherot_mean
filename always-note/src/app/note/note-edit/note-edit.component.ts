import { NoteService } from './../note.service';
import { Component, OnInit, Input } from '@angular/core';

import { Note } from './../note'

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  @Input() note:Note
  
  editText:string = "edit text"

  constructor(
      private _noteService:NoteService
  ){}

  ngOnInit() {
    this.editText = this.note.message
  }

  onSubmit()
  {
    console.log("onSubmit called")
    this.note.message = this.editText;
    this._noteService.removeEditableItem(this.note)
  }

  onClickCancel()
  {
    console.log("onCancel called")
    this._noteService.removeEditableItem(this.note)
  }

}
