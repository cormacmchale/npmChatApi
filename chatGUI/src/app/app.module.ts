import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { DisplayMessageComponent } from './display-message/display-message.component';
import { ServiceTestService } from './service-test.service';
import { HttpHandler } from 'injectablepackageobjectagain/lib';
import { httpserviceprovider } from 'newestsecondhttppackage';

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
  providers: [ServiceTestService, HttpHandler, httpserviceprovider],
  bootstrap: [AppComponent]
})
export class AppModule { }