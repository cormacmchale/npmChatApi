import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//import * as Timeline from 'lettercountcormacmchale';
import { AppComponent } from './app.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { DisplayMessageComponent } from './display-message/display-message.component';


@NgModule({
  declarations: [
    AppComponent,
    SendMessageComponent,
    DisplayMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'send', component: SendMessageComponent},
      {path:'recieve', component: DisplayMessageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
