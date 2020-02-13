export declare const WEBSERVERLOCATION = "ws://68.183.240.142:50000/appComms";
export declare const CONVERSATION: JSON[];
export declare class WebChatConnection {
    private ws;
    private socketIsOpen;
    private messageService;
    chatServer_init(url: string, password: string): void;
    private createConnection;
    sendMessage(user: string, message: string): null | undefined;
}
