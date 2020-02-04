import { Injectable } from '@angular/core';
import {WEBSERVERLOCATION, CONVERSATION, WebChatConnection} from 'finalwebchatclient';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {
  public name:string = "anon"
  public conversation = CONVERSATION;
  constructor(private ws:WebChatConnection)
  {
    this.ws.chatServer_init(WEBSERVERLOCATION,'1aDPnW3SZY2KgM5hAciR0');
  }
  sendMessage(message:string)
  {
   this.ws.sendMessage(message);
  }
  setName(name:string)
  {
    this.name=name
  }
}
