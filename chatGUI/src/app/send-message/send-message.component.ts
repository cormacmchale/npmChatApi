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
  
  public conversation: string;
  public formatConversation;

  constructor(private hope: ServiceTestService) {

  }

  ngOnInit()
  {
     this.hope.connect()
  }

  send(message:string)
  {
    this.hope.sendMessage(message);
    this.conversation = this.hope.conversation; 
  }

}
