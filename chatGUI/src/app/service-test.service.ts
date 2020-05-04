import { Injectable } from '@angular/core';
import {WEBSERVERLOCATION, CONVERSATION, WebChatConnection} from 'finalwebchatclientjson';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {
  public name
  public conversation = CONVERSATION;
  constructor(private ws:WebChatConnection)
  {
    this.ws.chatServer_init(WEBSERVERLOCATION,'In2hazQ5NmfK37ekHL61uDsYS8FgjdlOpJA0');
  }
  sendMessage(name:string,message:string)
  {
   this.ws.sendMessage(name,message);
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
