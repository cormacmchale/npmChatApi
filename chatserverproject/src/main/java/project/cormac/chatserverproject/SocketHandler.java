package project.cormac.chatserverproject;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class SocketHandler extends TextWebSocketHandler {
	
	//the list of connections maintained by the chat server
	List<WebSocketSession> sessions = new CopyOnWriteArrayList<WebSocketSession>();
	
	//over write this to handle the message that comes from a connection
	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws InterruptedException, IOException 
	{	
		//loop through the sessions and echo the message to everyone who is connected
		for(WebSocketSession webSocketSession : sessions) 
		{
			//send message here
			webSocketSession.sendMessage(new TextMessage(message.getPayload()));
		}
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		//loop through the array of sessions and remove it from the array
		//hopefully this will fix connection problems
		for(WebSocketSession webSocketSession : sessions) 
		{
			if (session == webSocketSession)
			{
				sessions.remove(session);
			}
		}
		super.afterConnectionClosed(session, status);
		//just for testing visually on console
		//System.out.println(sessions.size());
	}

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		//add new connection into the list of active connections
		sessions.add(session);
		//just for testing visually on console
		//System.out.println(sessions.size());
	}
}
