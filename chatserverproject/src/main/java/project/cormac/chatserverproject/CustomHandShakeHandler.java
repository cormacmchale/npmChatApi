package project.cormac.chatserverproject;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.http.HttpStatus;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

public class CustomHandShakeHandler implements HandshakeInterceptor{

	@Override
	public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
			Map<String, Object> attributes) throws Exception {
		// TODO Auto-generated method stub
		//System.out.println(request.getHeaders());
		//Set<String> checkThis = attributes.keySet();
		
		//System.out.println(checkThis.size());
		
		
		//if(request.getHeaders().getOrEmpty("sec-websocket-protocol")!=null)
		//{
			//response.flush();
		//	response.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR);
			//response.getHeaders().add("sec-websocket-protocol", "accepted");
			//return true;
		//}
		//might this work
		String addResponse = request.getHeaders().getOrEmpty("sec-websocket-protocol").toString();
		addResponse = addResponse.subSequence(1, addResponse.length()-1).toString();
		System.out.println(addResponse);		
		response.getHeaders().add("Sec-Websocket-Protocol", addResponse);
		return true;
	}

	@Override
	public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
			Exception exception) {
		System.out.println(exception.getMessage()+"error message");
		// TODO Auto-generated method stub
		
	}

}
