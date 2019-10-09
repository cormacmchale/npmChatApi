export class httpserviceprovider
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
      testRequest()
      {
        const xhr = new XMLHttpRequest()
        xhr.open('Get','https://www.google.com');
        xhr.onload = () =>
        {
            const data = JSON.parse(xhr.response);
            console.log(data);
            console.log(xhr.responseText+" I sent this (cormac)");
        }
        xhr.send();
      }
      
      //please god
      sendPost(method: string, url:string, send:string)
      {
        //should return a 404?
        const info:any = JSON.stringify({info:send});

        const xhr = new XMLHttpRequest()
        xhr.open(method,url);
        xhr.onload = () =>
        {
            const data = JSON.parse(xhr.response);
            console.log(data);
            console.log(xhr.responseText+" I sent this (cormac)");
        }
        xhr.send(info);
      }
}