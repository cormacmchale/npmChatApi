import { Injectable } from '@angular/core';
import { returnWords } from 'objectmethodscormacmchale';
import { httpserviceprovider } from 'newestsecondhttppackage';
import { HttpHandler } from 'injectablepackageobjectagain/lib';
import * as SockJS from 'sockjs-client';
import { print } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {


  constructor(private testOne:HttpHandler, private test:httpserviceprovider) { }

  hype:returnWords = new returnWords("hope")

  //create client here
  webSocketEndPoint: string = 'ws://10.0.2.15:8080/mywebserver';
  topic: string = "/topic/greetings";
  
  connect() 
  {
      console.log("Initialize WebSocket Connection");
      var socket = new WebSocket(this.webSocketEndPoint);
      socket.onopen = function(event)
      {
       print("Connected");
      };
      socket.onerror = function(error) {
        console.log('My app ' + error.type);
      };
  };

   connectToWebsocket()
   {
      this.connect();
   }
   sendMessage()   
   {
     
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
