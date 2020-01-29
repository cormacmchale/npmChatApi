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
	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws InterruptedException, IOException 
	{	
		//String checkNumber = message.getPayload();
		//System.out.println(checkNumber);
		//System.out.println(session.getId());
		//loop through the sessions and echo the message to everyone who is connected
	    //CopyOnWriteArrayList<WebSocketSession> echoMessage = SessionMonitor.getSessions(session.getHandshakeHeaders().getOrEmpty("sec-websocket-protocol").toString());
		//for(WebSocketSession webSocketSession : echoMessage) 
		//{
			//send message here
			//webSocketSession.sendMessage(new TextMessage(message.getPayload()));
		//}
		SessionMonitor.sendMessage(session.getHandshakeHeaders().getOrEmpty("sec-websocket-protocol").toString(), message);
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		//loop through the array of sessions and remove it from the array
		//hopefully this will fix connection problems
		//for(WebSocketSession webSocketSession : sessions) 
		//{
		//	if (session == webSocketSession)
			//{
				//sessions.remove(session);
			//}
		//}
		SessionMonitor.removeSession(session);
		super.afterConnectionClosed(session, status);
		//just for testing visually on console
		//System.out.println(sessions.size());
	}

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
	
		String addResponse = session.getHandshakeHeaders().getOrEmpty("sec-websocket-protocol").toString();
		addResponse = addResponse.subSequence(1, addResponse.length()-1).toString();	
		//if the password is on the server
		if(httpValidation.sendPost(addResponse))
		{
			//make post request to python server 
			SessionMonitor.addSession(session);			
		}
		else
		{
			//don't allow access to chat server
			//session.close();
			System.out.println("no connection");
		}
		
	}

}
