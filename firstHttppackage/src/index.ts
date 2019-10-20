export class httpserviceprovidertaketwo
{   
      makeRequest(userName: string)
      {
        //should return a 404??
        const xhr = new XMLHttpRequest()
        xhr.open('Get','https://www.google.com/'+userName);
        xhr.onload = () =>
        {
            const data =xhr.response;
            console.log(data);
            console.log(xhr.responseText+" I sent this (cormac)");
            //return data;
        }
        xhr.send();
      }
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
      
      sendPost(method: string, url:string, send:string)
      {
        const info:any = JSON.stringify({info:send});
        const xhr = new XMLHttpRequest()
        xhr.open(method,url, true);
        xhr.setRequestHeader('Content-type','JSON');
        xhr.onload = () =>
        {
            const data = JSON.parse(xhr.response);
            console.log(data);
            console.log(xhr.responseText+" I sent this (cormac)");
        }
        xhr.send(info);
      }
}