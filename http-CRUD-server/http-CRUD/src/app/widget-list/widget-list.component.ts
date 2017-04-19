import { Response } from '@angular/http';
import { Subscription } from 'rxjs';
import { WidgetService } from './../widget-service.service';
import { Widget } from './../widget';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  widgets:Array<Widget> = []
  getWidgetSubscription:Subscription
  deleteWidgetSubscription:Subscription

  @Output() deleteEvent = new EventEmitter()

  constructor(private _widgetService:WidgetService) { }

  ngOnInit() {
    console.log('widget-list: ngOnInit called > this._widgetService.widgets is ', this._widgetService.widgets)
    this.widgets = this._widgetService.widgets
    this._widgetService.getWidgets2()//.subscribe()
  }

  refreshWidgetList()
  {
    this._widgetService.getWidgets2()
    /*
    this.getWidgetSubscription = this._widgetService.getWidgets().subscribe(
      ( data: Response ) => {
        console.log("widget-list > refreshWidgetList > success > data is ", data)
        let tempArray:Array<Widget> = []
        for (let key in data)
        {
          let widget = new Widget(data[key]['title'], data[key]['text'], data[key]['_id'])
          tempArray.push(widget)
        }
        this.widgets = tempArray;
      },
      ( error: Error ) => {
        console.log( "ERROR: widget-list > refreshWidgetList > error > ", error )
      },
      () => { console.log("widget-list > refreshWidgetList > we got widgets > continue...") }
    )
    */
  }

  onClickEdit(widgetToEdit:Widget){
    //add widget to edit list in the widgetService
    console.log("widget-list > onClickEdit clicked")
    this._widgetService.editList.push(widgetToEdit)
  }

  onClickDelete(widgetToDelete)
  {
    console.log("widget-list > onClickEdit clicked")
    this.deleteWidgetSubscription = this._widgetService.deleteWidget(widgetToDelete._id).subscribe(
      ( data: Response ) => { console.log("widget-list: onClickDelete > deletion successful: ", data) },
      ( error: Error ) => { console.log("ERROR: widget-list: onClickDelete > error deleting widget " + widgetToDelete._id, error)},
      () => { 
        console.log("widget-list: onClickDelete > continue...")
        this.refreshWidgetList()
      }
    )
  }

}
