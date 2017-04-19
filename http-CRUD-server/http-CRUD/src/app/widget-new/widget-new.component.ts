import { Response } from '@angular/http';
import { WidgetService } from './../widget-service.service';
import { Widget } from './../widget';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-widget-new',
  templateUrl: './widget-new.component.html',
  styleUrls: ['./widget-new.component.css']
})
export class WidgetNewComponent implements OnInit {

  newWidget = new Widget()
  widgetAddSubscription:Subscription

  constructor(private _widgetService:WidgetService) { }

  ngOnInit() {
  }

  onSubmit(formData)
  {
    this.widgetAddSubscription = this._widgetService.createWidget(this.newWidget).subscribe(
      ( data: Response ) => {
        console.log("widget-new > onSubmit > success > data is ", data)
        //TODO: HOW TO ADD THE MONGO ID TO THE NEW WIDGET?
      },
      ( error: Error ) => { console.log("ERROR: widget-new > onSubmit > error: ", error) },
      () => {
        console.log("widget-new > onSubmit > continue > ")
        //TODO: DO WE NEED TO DO ANYTHING HERE?
      }
    )
  }

}
