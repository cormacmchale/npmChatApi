import { Component, OnInit } from '@angular/core';
import {test} from 'cormacmchaleaddnumber/lib';
//JavaScript Package testing
//import {letterCount} from 'lettercountcormacmchale';
//declare var letterCount: any;

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
 
  constructor() { }
  //private t:Timeline
  ngOnInit()
  {
  }
  send(message:string)
  {
    let x:number = test(5,6);
    //letterCount.letterCount(message)
    //let x  =  this.func.letterCount(message);
    alert(x);
  }

}
