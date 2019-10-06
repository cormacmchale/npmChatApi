import { Injectable } from '@angular/core';
import { returnWords } from 'objectmethodscormacmchale';
@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {


  constructor() { }

  hype:returnWords = new returnWords("hope")

  sendWords()
  {
   return this.hype.gethello();  
  }

}
