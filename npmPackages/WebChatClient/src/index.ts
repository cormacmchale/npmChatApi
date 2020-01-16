import {Observable} from 'rxjs';
export const WEBSERVERLOCATION = 'ws://127.0.0.1:50000/appComms';
export class WebChatConnection {
    //the actual web socket
    private ws:WebSocket;
    private socketIsOpen = 1;
    public createConnection(url:string): Observable<any>//Rx.Subject<MessageEvent> 
    {
       this.ws = new WebSocket(url);
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
       if(this.ws.readyState===this.socketIsOpen)
       {
          this.ws.send(message);
       }
       else
       {
         return null;
       }
     }
  }