import { Component, OnInit } from '@angular/core';
import {test} from 'cormacmchaleaddnumber/lib';
  //JavaScript Package testing
  //import{letterCount}from'lettercountcormacmchale';
  //declare var letterCount:any;
//need to import in service
import { ServiceTestService } from '../service-test.service';
import { Observable, Subject } from 'rxjs';

//this is now in service
//import { returnWords } from 'objectmethodscormacmchale';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  
  public conversation: string;

  constructor(private hope: ServiceTestService) {

  }

  ngOnInit()
  {
     this.hope.connect()
     //var update_loop = setInterval(function(){this.displayData(this.hope.conversation),1000});
  }

  send(message:string)
  {
    this.hope.sendMessage(message);
    //var update_loop = setInterval(function(){this.displayData(this.hope.conversation),1000});
    //setTimeout(this.displayData,2000);
    this.displayData("hello")
  }
  displayData(message:string)
  {
    this.conversation = this.hope.conversation;
  }

}
