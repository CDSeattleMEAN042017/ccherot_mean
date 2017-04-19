import { Injectable, NgModule } from '@angular/core';
import { Note } from './note'

@Injectable()
export class NoteService {

  notes:Array<Note> = []

  editNotes:Array<Note> = []

  constructor() { }

  getNotes()
  {
    return this.notes
  }

  deleteNote(noteToDelete)
  {
    const idx:number = this.notes.indexOf(noteToDelete)
    this.notes.splice(idx, 1)
  }

  addNote(noteToAdd:Note) 
  {
    this.notes.push(noteToAdd)
  }

  removeEditableItem(note:Note)
  {
    const idx = this.editNotes.indexOf(note)
    this.editNotes.splice(idx, 1)
  }

  markNoteForEdit(note:Note)
  {
    console.log("service > markNoteForEdit > local variable note is ", note)
    this.editNotes.push(note)
  }
}
