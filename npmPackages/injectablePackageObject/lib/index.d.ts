import { Container } from 'inversify';
declare var container: Container;
export declare class HttpHandler {
    testRequest(send: string): void;
}
export default container;
export declare const newObject: HttpHandler;
