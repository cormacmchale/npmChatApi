import { Component, OnInit } from '@angular/core';
//need to import in service
//this is simulating the ws for now
import { ServiceTestService } from '../service-test.service';
import { Observable, Subject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  
  //variable required for connection
  //possbile store this on the web server
  private conversation: string[] = [];
  private webSocketEndPoint: string = 'ws://127.0.0.1:50000/appComms';

  //subscribe to the observable to recieve the observer
  private chatServer:Subscription;
  
  constructor(private ws: ServiceTestService){}
  ngOnInit()
  {
    console.log(this.ws.myId);
    this.chatServer = this.ws.createConnection(this.webSocketEndPoint).subscribe
    (
      (data) => this.conversation.push(data),
      (error) => console.log(error),
      ()=> console.log("observer completed")
    )
  }
  sendMessage(message:string)
  {
    //this.ws.sendMessage(message);
  }

}
