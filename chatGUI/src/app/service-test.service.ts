import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {
  //the actual web socket
  private ws:WebSocket;
  private socketIsOpen = 1;
  constructor()
  {

  }
   public createConnection(url:string): Observable<any>//Rx.Subject<MessageEvent> 
   {
     this.ws = new WebSocket(url)
     return new Observable
                (
                  observer =>
                  {
                    //return a new observable
                    this.ws.onmessage =  (event) => observer.next(event.data)
                    this.ws.onerror = (event) => observer.next(event)
                    this.ws.onclose = (event) => observer.complete()
                    return () => this.ws.close(404, "The User Disconnected")
                  }
                )
   }
   sendMessage(message:string)
   {
     this.ws.send(message);
   }
}
