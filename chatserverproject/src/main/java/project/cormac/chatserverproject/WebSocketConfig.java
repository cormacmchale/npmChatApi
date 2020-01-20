package project.cormac.chatserverproject;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		//hopefully this works?
		//need to test
		registry.addHandler(new SocketHandler(), "/appComms").setAllowedOrigins("*").addInterceptors(new CustomHandShakeHandler());
	}
}
