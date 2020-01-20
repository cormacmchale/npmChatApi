package project.cormac.chatserverproject;

import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

public class SessionDatabase {

	private static final SessionDatabase sessionHandler = new SessionDatabase();
	//singleton
	private SessionDatabase()
	{}
	public static SessionDatabase getInstance()
	{
		return sessionHandler;
	}
	
	//this will handle all of the sessions
	private ConcurrentHashMap<String, CopyOnWriteArrayList<WebSocketSession>> sessionMap = new ConcurrentHashMap<String, CopyOnWriteArrayList<WebSocketSession>>();
	//adding a session based on the initial sent message
	public void addSession(WebSocketSession addThis)
	{
		if(sessionMap.containsKey(addThis.getHandshakeHeaders().getOrEmpty("sec-websocket-protocol").toString()))
		{
			//session added correctly
			CopyOnWriteArrayList<WebSocketSession> tempAdd = sessionMap.get(addThis.getHandshakeHeaders().getOrEmpty("sec-websocket-protocol").toString());
			tempAdd.add(addThis);
		}
		else
		{
			CopyOnWriteArrayList<WebSocketSession> newSession = new CopyOnWriteArrayList<WebSocketSession>();
			newSession.add(addThis);
			sessionMap.put(addThis.getHandshakeHeaders().getOrEmpty("sec-websocket-protocol").toString(), newSession);
		}
	}
	
	public void removeSession(WebSocketSession removeThis)
	{
		//the session and the list will always be there
		CopyOnWriteArrayList<WebSocketSession> tempRemoval = sessionMap.get(removeThis.getHandshakeHeaders().getOrEmpty("sec-websocket-protocol").toString());
		for(WebSocketSession webSocketSession : tempRemoval)
		{
			//remove from the session
			if(removeThis == webSocketSession)
			{
				System.out.println("session sucessfully removed");
				tempRemoval.remove(removeThis);
			}
		}
	}
	
	
	public void sendMessage(String id, TextMessage message) throws IOException
	{
		//the session and the list will always be there
		CopyOnWriteArrayList<WebSocketSession> tempRemoval = sessionMap.get(id);
		for(WebSocketSession webSocketSession : tempRemoval)
		{
			webSocketSession.sendMessage(message);
		}
	}
		
}
