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
            var data = JSON.parse(xhr.response);
            console.log(data);
            console.log(xhr.responseText + " I sent this (cormac)");
        };
        xhr.send();
    };
    //second method
    httpserviceprovider.prototype.testRequest = function () {
        var xhr = new XMLHttpRequest();
        xhr.open('Get', 'https://www.google.com');
        xhr.onload = function () {
            var data = JSON.parse(xhr.response);
            console.log(data);
            console.log(xhr.responseText + " I sent this (cormac)");
        };
        xhr.send();
    };
    return httpserviceprovider;
}());
exports.httpserviceprovider = httpserviceprovider;
