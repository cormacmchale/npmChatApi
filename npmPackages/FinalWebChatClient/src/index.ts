import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
//location of server
export const WEBSERVERLOCATION = 'ws://68.183.240.142:50000/appComms';
//conversation for processing
export const CONVERSATION : JSON [ ] = [ ];

export class WebChatConnection {
    //the actual web socket
    private ws:WebSocket;
    private socketIsOpen = 1;
    private messageService: Subscription;
   
    //setup the connection
    public chatServer_init(url:string,password:string)
    {
        this.messageService = this.createConnection(url, password).subscribe
        (
          (data) => CONVERSATION.push(JSON.parse(data)),
          (error) => console.log(error),
          ()=> console.log("observer completed")
        )
    }

    private createConnection(url:string,password:string): Observable<any>//Rx.Subject<MessageEvent> 
    {
       this.ws = new WebSocket(url,password);
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
     sendMessage(user:string ,message:string)
     {

       var send = {user,message};

       if(this.ws.readyState===this.socketIsOpen)
       {
          this.ws.send(JSON.stringify(send));
       }
       else
       {
         return null;
       }
     }
  }