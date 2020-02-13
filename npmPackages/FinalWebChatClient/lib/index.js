"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
//location of server
exports.WEBSERVERLOCATION = 'ws://68.183.240.142:50000/appComms';
//conversation for processing
exports.CONVERSATION = [];
class WebChatConnection {
    constructor() {
        this.socketIsOpen = 1;
    }
    //setup the connection
    chatServer_init(url, password) {
        this.messageService = this.createConnection(url, password).subscribe((data) => exports.CONVERSATION.push(JSON.parse(data)), (error) => console.log(error), () => console.log("observer completed"));
    }
    createConnection(url, password) {
        this.ws = new WebSocket(url, password);
        return new rxjs_1.Observable(observer => {
            //return a new observable
            this.ws.onmessage = (event) => observer.next(event.data);
            this.ws.onerror = (event) => observer.next(event);
            this.ws.onclose = (event) => observer.complete();
            return () => this.ws.close(404, "The User Disconnected");
        });
    }
    sendMessage(user, message) {
        var send = { user, message };
        if (this.ws.readyState === this.socketIsOpen) {
            this.ws.send(JSON.stringify(send));
        }
        else {
            return null;
        }
    }
}
exports.WebChatConnection = WebChatConnection;
