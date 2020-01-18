package project.cormac.chatserverproject;

import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.WebSocketSessionDecorator;

public class ExtendedSession extends WebSocketSessionDecorator{

	private String identifier;
	
	public ExtendedSession(WebSocketSession session, String id) {
		super(session);
		this.identifier = id;
	}

	//for adding session based off of an id
	public String getIdentifier() {
		return identifier;
	}

	public void setIdentifier(String identifier) {
		this.identifier = identifier;
	}
}
