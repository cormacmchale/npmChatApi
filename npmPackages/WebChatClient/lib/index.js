"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
exports.WEBSERVERLOCATION = 'ws://127.0.0.1:50000/appComms';
class WebChatConnection {
    constructor() {
        this.socketIsOpen = 1;
    }
    createConnection(url) {
        this.ws = new WebSocket(url);
        return new rxjs_1.Observable(observer => {
            //return a new observable
            this.ws.onmessage = (event) => observer.next(event.data);
            this.ws.onerror = (event) => observer.next(event);
            this.ws.onclose = (event) => observer.complete();
            return () => this.ws.close(404, "The User Disconnected");
        });
    }
    sendMessage(message) {
        if (this.ws.readyState === this.socketIsOpen) {
            this.ws.send(message);
        }
        else {
            return null;
        }
    }
}
exports.WebChatConnection = WebChatConnection;
