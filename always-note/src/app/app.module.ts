import { NoteService } from './note/note.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NoteNewComponent } from './note/note-new/note-new.component';
import { NoteListComponent } from './note/note-list/note-list.component';
import { NoteEditComponent } from './note/note-edit/note-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteNewComponent,
    NoteListComponent,
    NoteEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
