package project.cormac.chatserverproject;

import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;

public class passwordValidator {

	// one instance, reuse
	//can use this for the requests
    private final HttpClient httpClient = HttpClient.newBuilder()
            .version(HttpClient.Version.HTTP_2)
            .build();
    
    public boolean sendPost(String password) throws Exception {

    	String url = "http://138.68.112.243:5000/checkPassword";
        System.out.println("trying to form request to "+url);
        System.out.println(password);
        HttpRequest request = HttpRequest.newBuilder()
                .POST(HttpRequest.BodyPublishers.ofString(password))
                .uri(URI.create(url))// add request header
                .build();
        
        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println("recieved response");
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
