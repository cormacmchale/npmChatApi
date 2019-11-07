import { Component, OnInit } from '@angular/core';
import {test} from 'cormacmchaleaddnumber/lib';
  //JavaScript Package testing
  //import{letterCount}from'lettercountcormacmchale';
  //declare var letterCount:any;
//need to import in service
import { ServiceTestService } from '../service-test.service';
import { Observable, Subject } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

//this is now in service
//import { returnWords } from 'objectmethodscormacmchale';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  
  public messages: Subject<MessageEvent>;
  //create client here
  private webSocketEndPoint: string = 'ws://127.0.0.1:50000/name';

  constructor(private hope: ServiceTestService) {

   }

  ngOnInit()
  {
     this.messages = this.hope.connect(this.webSocketEndPoint)
     console.log(this.messages.subscribe)
  }

  send(message:string)
  {
        //testing
        //this.x = new returnWords("fight");
        //alert(this.hope.sendWords());
        //this.hope.sendthisInfo("POST","127.0.0.1",message);
        //this.hope.makeRequest("hello");
        //the next big thing
        //this.hope.makeNewestRequest();
        //this.hope.sendMessage(message);
  }

}
