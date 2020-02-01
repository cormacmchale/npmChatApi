package project.cormac.chatserverproject;

import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

public class passwordValidator {

	// one instance, reuse
	//can use this for the requests
    private final HttpClient httpClient = HttpClient.newBuilder()
            .version(HttpClient.Version.HTTP_2)
            .build();
    
    public boolean sendPost(String password) throws Exception {


        HttpRequest request = HttpRequest.newBuilder()
                .POST(HttpRequest.BodyPublishers.ofString(password))
                .uri(URI.create("http://0.0.0.0:5000/checkPassword"))// add request header
                .header("Content-Type", "application/json")
                .build();

        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
        //parse out the answer for validation
		String answer = response.body().toString().subSequence(1, response.body().toString().length()-2).toString();
		//System.out.println(answer);
        if(answer.equalsIgnoreCase("passed"))
        {
        	return true;
        }
        else
        {
        	return false;
        }

    }

}
