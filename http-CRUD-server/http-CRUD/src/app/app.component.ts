import { WidgetService } from './widget-service.service';
import { Component } from '@angular/core';
import { Widget } from './widget'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  editList:Array<Widget> = []
  constructor(
    private _widgetService:WidgetService
  ){}

  ngOnit()
  {
    this.editList = this._widgetService.editList
  }

  onDeleteWidget(event)
  {
    console.log("app.component: onDeleteWidget called and event is ", event)
    //refresh the list
    this._widgetService.getWidgets2()
  }

  title = 'Widgets, Widgets, and More Widgets!';
}
