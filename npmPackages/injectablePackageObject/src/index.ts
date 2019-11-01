import { Container } from 'inversify';
import { injectable } from 'inversify';
var container = new Container();
@injectable()
export class HttpHandler
    {  
      //second method
      testRequest(send:string)
      {
        const info:any = JSON.stringify({info:send});
        const xhr = new XMLHttpRequest()
        xhr.open('Get','https://127.0.0.1:80/');
        xhr.onload = () =>
        {
            const data = JSON.parse(xhr.response);
            console.log(data);
            console.log(xhr.responseText+" I sent this (cormac)");
        }
        xhr.send();
      }
}
container.bind<HttpHandler>(HttpHandler).toSelf();
export default container;
export const newObject:HttpHandler = container.resolve<HttpHandler>(HttpHandler);

