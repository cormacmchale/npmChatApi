import { Component, OnInit } from '@angular/core';
import {test} from 'cormacmchaleaddnumber/lib';
  //JavaScript Package testing
  //import{letterCount}from'lettercountcormacmchale';
  //declare var letterCount:any;
//need to import in service
import { ServiceTestService } from '../service-test.service';
import { Observable, Subject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

//this is now in service
//import { returnWords } from 'objectmethodscormacmchale';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  
  //variable required for connection
  private conversation: string[] = [];
  private webSocketEndPoint: string = 'ws://127.0.0.1:50000/appComms';

  private chatServer:Subscription;
  
  constructor(private ws: ServiceTestService) {

  }

  ngOnInit()
  {
    this.chatServer = this.ws.createConnection(this.webSocketEndPoint).subscribe(
      data => this.conversation.push(data)
    )
  }
  send(message:string)
  {
    this.ws.sendMessage(message);
  }

}
