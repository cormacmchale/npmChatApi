import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {WEBSERVERLOCATION, CONVERSATION, WebChatConnection} from 'finalwebchatclient';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  public conversation = CONVERSATION;

  constructor(private ws:WebChatConnection)
  {
     this.ws.chatServer_init(WEBSERVERLOCATION,'1aDPnW3SZY2KgM5hAciR0');
     CONVERSATION
  }
  //not needed
  ngOnInit(){}
  sendMessage(message:string)
  {
   console.log(message);
   this.ws.sendMessage(message);
  }
}

