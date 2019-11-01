"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("../node_modules/inversify");
var inversify_2 = require("inversify");
var container = new inversify_1.Container();
var HttpHandler = /** @class */ (function () {
    function HttpHandler() {
    }
    //second method
    HttpHandler.prototype.testRequest = function (send) {
        var info = JSON.stringify({ info: send });
        var xhr = new XMLHttpRequest();
        xhr.open('Get', 'https://127.0.0.1:80/');
        xhr.onload = function () {
            var data = JSON.parse(xhr.response);
            console.log(data);
            console.log(xhr.responseText + " I sent this (cormac)");
        };
        xhr.send();
    };
    HttpHandler = __decorate([
        inversify_2.injectable()
    ], HttpHandler);
    return HttpHandler;
}());
exports.HttpHandler = HttpHandler;
container.bind(HttpHandler).toSelf();
exports.default = container;
exports.newObject = container.resolve(HttpHandler);
