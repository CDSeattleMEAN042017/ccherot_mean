import { NoteService } from './note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(private _noteService:NoteService) { }

  ngOnInit() {
  }

}
