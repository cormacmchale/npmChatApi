package project.cormac.chatserverproject;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

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
	private ConcurrentHashMap<String, CopyOnWriteArrayList<ExtendedSession>> sessionMap = new ConcurrentHashMap<String, CopyOnWriteArrayList<ExtendedSession>>();
	//adding a session based on the initial sent message
	public void addSession(ExtendedSession addThis)
	{
		if(sessionMap.containsKey(addThis.getIdentifier()))
		{
			//session added correctly
			CopyOnWriteArrayList<ExtendedSession> tempAdd = sessionMap.get(addThis.getIdentifier());
			tempAdd.add(addThis);
		}
		else
		{
			CopyOnWriteArrayList<ExtendedSession> newSession = new CopyOnWriteArrayList<ExtendedSession>();
			newSession.add(addThis);
			sessionMap.put(addThis.getIdentifier(), newSession);
		}
	}
	
	public void removeSession(ExtendedSession removeThis)
	{
		//the session and the list will always be there
		CopyOnWriteArrayList<ExtendedSession> tempRemoval = sessionMap.get(removeThis.getIdentifier());
		for(ExtendedSession webSocketSession : tempRemoval)
		{
			//remove from the session
			if(removeThis == webSocketSession)
			{
				tempRemoval.remove(removeThis);
			}
		}
	}
	//return the relevant list
	public CopyOnWriteArrayList<ExtendedSession> getSessions(String id)
	{
		return sessionMap.get(id);	
	}
	
}
