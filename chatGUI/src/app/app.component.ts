import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceTestService } from './service-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chatGUI';

  constructor(private moveToPage:Router, private service:ServiceTestService){}
  ngOnInit()
  {}
  navigateToPage()
  {
    this.moveToPage.navigateByUrl("/recieve");
  }
}
