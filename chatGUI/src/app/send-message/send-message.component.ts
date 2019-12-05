import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WebChatConnection, WEBSERVERLOCATION} from 'webchatclient';
import { Subscription } from 'webchatclient/node_modules/rxjs/internal/Subscription';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  //possbile store this on the web server
  private conversation: string[] = [];
  //subscribe to the observable to recieve the observer
  private messageservice: Subscription;
  constructor(private ws: WebChatConnection)
  {
    this.ws.createConnection(WEBSERVERLOCATION);
  }
  ngOnInit()
  {
    this.messageservice = this.ws.createConnection(WEBSERVERLOCATION).subscribe
    (
      (data) => this.conversation.push(data),
      (error) => console.log(error),
      ()=> console.log("observer completed")
    )
  }
  sendMessage(message:string)
  {
    console.log("hello")
    this.ws.sendMessage(message);
  }
}
