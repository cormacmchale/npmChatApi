package project.cormac.chatserverproject;

import java.util.Map;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

public class CustomHandShakeHandler implements HandshakeInterceptor{

	@Override
	public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
			Map<String, Object> attributes) throws Exception {

		//possibly do this differently?
		String addResponse = request.getHeaders().getOrEmpty("sec-websocket-protocol").toString();
		addResponse = addResponse.subSequence(1, addResponse.length()-1).toString();
		
		//add a response to keep chrome happy
		response.getHeaders().add("Sec-Websocket-Protocol", addResponse);
		
		return true;
	}

	@Override
	public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
			Exception exception) {
		//System.out.println(exception.getMessage()+"error message");
		// TODO Auto-generated method stub
		
	}

}
