import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  //let 
  constructor() { }

  ngOnInit() {
  }

  send(message:string){
    alert(message); //show me the money
  }

}
