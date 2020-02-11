import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from '../service-test.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit, AfterViewInit {

  public conversation
  public message
  public name
  //parsing out the messages
  public clearOnInput    
  constructor(private ws:ServiceTestService)
  {
     this.conversation = ws.conversation
     this.name = this.ws.getName();
  }

  //keep scrolling down
  ngOnInit()
  {
     setInterval(()=>{
      this.scrollPage();}, 300);
  }
  ngAfterViewInit() {} 
  sendMessage()
  {
    //this.ngAfterViewInit()
    //console.log(this.message)
    this.ws.sendMessage(this.ws.name+": "+this.message)
    //clear after you end the input
    this.message = "";
  }

  scrollPage()
  {
    //window.scrollTo(0,document.body.scrollHeight);
  }

}

