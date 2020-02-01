package project.cormac.chatserverproject;

import java.io.IOException;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class SocketHandler extends TextWebSocketHandler {
	
	//get a handle on the database
	SessionDatabase SessionMonitor = SessionDatabase.getInstance();
	
	//password validator
	passwordValidator httpValidation = new passwordValidator();
	
	//over write this to handle the message that comes from a connection
	//pass to session Database to add to correct session
	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws InterruptedException, IOException 
	{	
		SessionMonitor.sendMessage(session.getHandshakeHeaders().getOrEmpty("sec-websocket-protocol").toString(), message);
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		//loop through the array of sessions and remove it from the array
		SessionMonitor.removeSession(session);
		super.afterConnectionClosed(session, status);	
	}

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
	
		//possibly do this better?
		String password = session.getHandshakeHeaders().getOrEmpty("sec-websocket-protocol").toString();
		password = password.subSequence(1, password.length()-1).toString();
		
		//if the password is on the server
		if(httpValidation.sendPost(password))
		{
			//make post request to python server 
			SessionMonitor.addSession(session);
			System.out.println("Validation passed - Session Passed");
		}
		else
		{
			session.close(CloseStatus.NORMAL);
			System.out.println("Validation failed - Session Removed");
		}	
	}

}
