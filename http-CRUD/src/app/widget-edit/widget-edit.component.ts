import { Response } from '@angular/http';
import { Subscription } from 'rxjs';
import { WidgetService } from './../widget-service.service';
import { Widget } from './../widget';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  //since this is injected, we should not have to create an empty widget
  @Input() widget:Widget = new Widget()

  //these are the widget properties that we want to edit
  widgetTitle:string = ""
  widgetText:string = ""

  updateWidgetSubscription:Subscription

  constructor(private _widgetService:WidgetService) { }

  ngOnInit() {
    console.log("widget-edit ngOnInit called" )
    this.widgetTitle = this.widget.title
    this.widgetText = this.widget.text
  }

  onClickSubmit(formData)
  {
    this.widget.title = this.widgetTitle
    this.widget.text = this.widgetText
    this._widgetService.updateWidget(this.widget).subscribe(
      ( data: Response ) => { console.log("widget-edit: onClickSubmit > successful widget update operation > data: ", data)},
      ( error: Error ) => { console.log("ERROR: widget-edit: onClickSubmit > error updating widget: ", this.widget._id) },
      () => {
        console.log("widget-edit: onClickSubmit > continue")
        //we can perform the same operation as onClickCancel now 
        //so that this widget goes away
        this.onClickCancel()
      }
    )
  }

  onClickCancel()
  {
    let idx = this._widgetService.editList.indexOf(this.widget)
    this._widgetService.editList.splice(idx, 1)
  }

}
