package project.cormac.chatserverproject;

import java.io.IOException;
import java.util.Map;

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
		if(request.getHeaders().getOrEmpty("sec-websocket-protocol")!=null)
		{
			//response.flush();
			response.setStatusCode(HttpStatus.ACCEPTED);
			//response.getHeaders().add("sec-websocket-protocol", "accepted");
			return true;
		}
		return true;
	}

	@Override
	public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
			Exception exception) {
		System.out.println(exception.getMessage()+"error message");
		// TODO Auto-generated method stub
		
	}



}
