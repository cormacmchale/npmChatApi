"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var returnWords = /** @class */ (function () {
    function returnWords(name) {
        this.objectName = name;
    }
    returnWords.prototype.gethello = function () {
        return "hello";
    };
    returnWords.prototype.getGoodbye = function () {
        return "Goodbye";
    };
    returnWords.prototype.getSuccess = function () {
        return "Success";
    };
    return returnWords;
}());
exports.returnWords = returnWords;
