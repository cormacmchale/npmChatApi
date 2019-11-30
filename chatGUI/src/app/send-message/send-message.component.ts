import { Component, OnInit } from '@angular/core';
//need to import in service
//this is simulating the ws for now
import { ServiceTestService } from '../service-test.service';
import { Observable, Subject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

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
