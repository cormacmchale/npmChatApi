import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from '../service-test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.css']
})
export class DisplayMessageComponent implements OnInit {

  public name
  constructor(private moveToChat:Router, private Namer:ServiceTestService) { }

  ngOnInit() {

  }

  setNameStartChat()
  {
    if(this.name == "" || this.name == " ")
    {
      alert("You need to select an alias for chat")
      return
    }
    else
    {
      this.Namer.setName(this.name)
      this.moveToChat.navigateByUrl("/send");
    }

  }

}
