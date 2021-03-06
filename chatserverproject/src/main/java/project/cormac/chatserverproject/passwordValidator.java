package project.cormac.chatserverproject;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class passwordValidator {

	// one instance, reuse
	//can use this for the requests
    private final HttpClient httpClient = HttpClient.newBuilder()
            .version(HttpClient.Version.HTTP_2)
            .build();
    
    public boolean sendPost(String password) throws Exception {

    	//endpoint for password validation
    	String url = "http://68.183.240.142:5000/checkPassword";
        //System.out.println("trying to form request to "+url);
        //System.out.println(password);
        HttpRequest request = HttpRequest.newBuilder()
                .POST(HttpRequest.BodyPublishers.ofString(password))
                .uri(URI.create(url))// add request header
                .build();
        
        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
        //System.out.println("recieved response");
        //if password validation passes
        if(response.statusCode()== 200)
        {
        	return true;
        }
        else
        {
        	return false;
        }
    }

}
