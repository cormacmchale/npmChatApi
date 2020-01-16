import { Observable } from 'rxjs';
export declare const WEBSERVERLOCATION = "ws://127.0.0.1:50000/appComms";
export declare class WebChatConnection {
    private ws;
    private socketIsOpen;
    createConnection(url: string): Observable<any>;
    sendMessage(message: string): null | undefined;
}
