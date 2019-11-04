import { Component, OnInit } from '@angular/core';
import {test} from 'cormacmchaleaddnumber/lib';
  //JavaScript Package testing
  //import{letterCount}from'lettercountcormacmchale';
  //declare var letterCount:any;
//need to import in service
import { ServiceTestService } from '../service-test.service';

//this is now in service
//import { returnWords } from 'objectmethodscormacmchale';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  
  constructor(private hope: ServiceTestService) { }

  //private t:Timeline
  //x:returnWords

  ngOnInit()
  {}

  send(message:string)
  {
        //testing
        //this.x = new returnWords("fight");
        //alert(this.hope.sendWords());
        //this.hope.sendthisInfo("POST","127.0.0.1",message);
        //this.hope.makeRequest("hello");
        //the next big thing
        //this.hope.makeNewestRequest();
        this.hope.connectToWebsocket();
  }

}
