import { Injectable } from '@angular/core';
import { returnWords } from 'objectmethodscormacmchale';
import { httpserviceprovider } from 'newestsecondhttppackage';
import { HttpHandler } from 'injectablepackageobjectagain/lib';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {


  constructor(private testOne:HttpHandler, private test:httpserviceprovider) { }

  hype:returnWords = new returnWords("hope")
  
  //this is the message event object
  private subject: Rx.Subject<MessageEvent>
  public ws: WebSocket;

  public connect(webSocketEndPoint): Rx.Subject<MessageEvent> 
  {
    this.ws = new WebSocket(webSocketEndPoint);

    let reciever = Rx.Observable.create(
      (obs:Rx.Observer<MessageEvent>)=>
      {
        this.ws.onmessage = obs.next.bind(obs); 
      }
    )
    let sender = 
    {
      next:(data)=>
      {
        this.ws.send(data)
      }
    }
    return Rx.Subject.create(sender, reciever);
  };
  
  send()
  {
    this.ws.send("hello");
  }












  sendWords()
  {
    return this.hype.gethello()+"\n"+this.hype.getGoodbye()+"\n"+this.hype.getSuccess();  
  }
  makeRequest(info:string)
  {
    this.test.testRequest(info);
  }
  makeOtherRequest(name:string)
  {
    this.test.makeRequest(name);
  }
  sendthisInfo(method:string,url:string,info:string)
  {
    this.test.sendPost(method,url,info)
  }
  makeNewestRequest()
  {
    this.testOne.testRequest("hello");
  }

}
