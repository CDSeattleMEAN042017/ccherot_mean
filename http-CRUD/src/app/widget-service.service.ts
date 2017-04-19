import { Widget } from './widget';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Headers } from '@angular/http'
import 'rxjs'

@Injectable()
export class WidgetService {

  //this is an array of all the widgets because
  //ideally we want to store the list of widgets here 
  //in the widget service
  private _widgets: Array<Widget> = new Array<Widget>()
  widgetData: Object = { widgetList: this.widgets }

  get widgets():Array<Widget> {
    return this._widgets
  }

  //this is the edit list, an array of widgets to be edited
  editList:Array<Widget> = []

  constructor(
       
    private _http:Http
    
    ) { 
      console.log("widget-service constructor called") 
      this.getWidgets().subscribe(
      data => {
        this._widgets = data
        /*
        this._widgets = []
        for (let key in data)
        {
          this._widgets.push(new Widget(data[key]['title'], data[key]['text'], data[key]['_id']))
          //tempArray.push(widget)
        }
        */
      }
    )
  }

  ngOnInit()
  {
    console.log('widget-service: ngOnInit')
    
  }

  //the .map part of this requires rxjs
  getWidgets ()
  {
    console.log('WidgetService: getTasks called')
    //this service is going to return the get operation as an Observable
    return this._http.get('/widgets')
      .map( (response: Response) => response.json() )
  }

  getWidgets2()
  {
    console.log('WidgetService: getTasks2 called')

    //do the whole operation here and set the loal array
    //of widgets
    return this._http.get('/widgets').map( (response: Response) => response.json() ).subscribe(
      ( data: Response ) => {
        console.log('widget-service: getWidgets2 > data is ', data)
        
        //this._widgets = data as Widget[]

        /*
        this._widgets = []
        for (let key in data)
        {
          this._widgets.push(new Widget(data[key]['title'], data[key]['text'], data[key]['_id']))
          //tempArray.push(widget)
        }
        */
        console.log('widget-service: getWidgets2 > widgets is now ', this._widgets)
      }, 
      ( error: Error ) => { console.log('ERROR: getWidgets2 > there was an error getting widgets') },
      () => { console.log('widget-service: getWidgets2: continue')}
    )
      
  }

  getWidgets3()
  {
    //use a promise to get the widgets from the server
  }

  //pass a JSON.stringified widget as post data
  createWidget(newWidget:Widget)
  {
    console.log("widget-service: createWidget > newWidget is ", newWidget )
    
    let myHeaders:Headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ 
      method: RequestMethod.Post,
      headers: myHeaders 
    });
    
    return this._http.post('/widgets', newWidget, options) //JSON.stringify(
    .map( (response: Response) => response.json() )
  }

  createWidget2()
  {

  }

  deleteWidget(id:string)
  {
    console.log("widget-service: deleteWidget > id is ", id)
    let myHeaders:Headers = new Headers({ 'Content-Type': 'application/json' });
    myHeaders.append('id', id)// this.headers.append('Parameter',  + params);
    myHeaders.append('foo', "bar")
    let options = new RequestOptions({ 
      method: RequestMethod.Delete, 
      body: JSON.stringify({id:id}),
      headers: myHeaders
    });
    return this._http.delete('/widgets/id:'+ id, options ) //+ id
      .map( (response: Response) => response.json() )
  }

  deleteWidget2(id:string)
  {

  }

  updateWidget(widgetToUpdate)
  {
    return this._http.patch('/widgets', JSON.stringify(widgetToUpdate) )
      .map( ( response: Response) => response.json() )
  }

  updateWidget2(widgetToUpdate)
  {
    //update the local arry of widgets when complete
  }

}
