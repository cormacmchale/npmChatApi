"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpserviceprovider = /** @class */ (function () {
    function httpserviceprovider() {
    }
    httpserviceprovider.prototype.makeRequest = function (userName) {
        //should return a 404??
        var xhr = new XMLHttpRequest();
        xhr.open('Get', 'https://www.google.com/' + userName);
        xhr.onload = function () {
            var data = xhr.response;
            console.log(data);
            console.log(xhr.responseText + " I sent this (cormac)");
            //return data;
        };
        xhr.send();
    };
    //second method
    httpserviceprovider.prototype.testRequest = function (send) {
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
    httpserviceprovider.prototype.sendPost = function (method, url, send) {
        var info = JSON.stringify({ info: send });
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-type', 'JSON');
        xhr.onload = function () {
            var data = JSON.parse(xhr.response);
            console.log(data);
            console.log(xhr.responseText + " I sent this (cormac)");
        };
        xhr.send(info);
    };
    return httpserviceprovider;
}());
exports.httpserviceprovider = httpserviceprovider;
