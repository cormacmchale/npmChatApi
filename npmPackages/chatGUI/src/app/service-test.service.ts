import { Injectable } from '@angular/core';
import { returnWords } from 'objectmethodscormacmchale';
import { httpserviceprovider } from 'newestsecondhttppackage';
import { HttpHandler } from 'injectablepackageobjectagain/lib';
@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {


  constructor(private testOne:HttpHandler, private test:httpserviceprovider) { }

  hype:returnWords = new returnWords("hope")


  sendWords()
  {
    return this.hype.gethello()+"\n"+this.hype.getGoodbye()+"\n"+this.hype.getSuccess();  
  }

  makeRequest(info:string)
  {
    this.test.testRequest(info);
  }
  makeOtherRequest(name:string)
  {
    this.test.makeRequest(name);
  }
  sendthisInfo(method:string,url:string,info:string)
  {
    this.test.sendPost(method,url,info)
  }
  makeNewestRequest()
  {
    this.testOne.testRequest("hello");
  }

}
