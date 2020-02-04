import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { DisplayMessageComponent } from './display-message/display-message.component';
import { ServiceTestService } from './service-test.service';
import { WebChatConnection } from 'finalwebchatclient';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ]),
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [ServiceTestService, WebChatConnection],
  bootstrap: [AppComponent]
})
export class AppModule { }
