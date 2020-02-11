import { Injectable } from '@angular/core';
import {WEBSERVERLOCATION, CONVERSATION, WebChatConnection} from 'finalwebchatclient';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {
  public name
  public conversation = CONVERSATION;
  constructor(private ws:WebChatConnection)
  {
    this.ws.chatServer_init(WEBSERVERLOCATION,'GET6rRq1Ls');
  }
  sendMessage(message:string)
  {
   this.ws.sendMessage(message);
  }
  setName(name:string)
  {
    this.name=name
  }

  //for loading into chat
  getName():string
  {
    return this.name
  }
}
