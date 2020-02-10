import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from '../service-test.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  public conversation
  public message
  public name
  constructor(private ws:ServiceTestService)
  {
     this.conversation = ws.conversation
  }
  //not needed
  ngOnInit(){}
  sendMessage(message:string)
  {
    this.ws.sendMessage(this.ws.name+": "+message)    
  }
  setName(name:string)
  {
     this.ws.setName(name)
     alert("Name changed to "+name)
  }
}

