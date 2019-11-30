import { Injectable } from '@angular/core';
import { returnWords } from 'objectmethodscormacmchale';
import { httpserviceprovider } from 'newestsecondhttppackage';
import { HttpHandler } from 'injectablepackageobjectagain/lib';
import * as Rx from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { NodeLogger } from '@angular/core/src/view';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {


  constructor(private testOne:HttpHandler, private test:httpserviceprovider) { }

  hype:returnWords = new returnWords("hope")
  
  //this is the message event object
  //private subject: Rx.Subject<MessageEvent>
  public ws: WebSocket;
  //create client here
  public conversation:string = "";
  private s:string;
  public webSocketEndPoint: string = 'ws://127.0.0.1:50000/name';
  public connect() //Rx.Subject<MessageEvent> 
  {
    this.ws = new WebSocket(this.webSocketEndPoint);
    this.ws.addEventListener("open", (event: Event) => {
      console.log("Connection");
    });
    this.ws.addEventListener("message", (event: MessageEvent) => {
       this.addData(event.data);
    });
  }
  sendMessage(message:string)
  {
    this.ws.send(message);
  }
  addData(data:string)
  {
    this.conversation += data;
  }

}
