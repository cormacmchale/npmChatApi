import { Injectable } from '@angular/core';
import { returnWords } from 'objectmethodscormacmchale';
import { httpserviceprovider } from 'secondhttppackage';
@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {


  constructor() { }

  hype:returnWords = new returnWords("hope")
  test:httpserviceprovider = new httpserviceprovider();

  sendWords()
  {
   return this.hype.gethello()+" "+this.hype.getGoodbye()+"\n"+this.hype.getSuccess();  
  }

  makeRequest()
  {
    this.test.testRequest();
  }
  makeOtherRequest(name:string)
  {
    this.test.makeRequest(name);
  }
  sendthisInfo(method:string,url:string,info:string)
  {
    this.test.sendPost(method,url,info)
  }

}
