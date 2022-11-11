"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employ = void 0;
var employ = /** @class */ (function () {
    function employ(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        //defines properties assigns automatically
        //similar to constructor in getset.ts 
    }
    Object.defineProperty(employ.prototype, "FirstName", {
        get: function () {
            return this._firstName;
        },
        set: function (theFirst) {
            this._firstName = theFirst;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(employ.prototype, "LastName", {
        get: function () {
            return this._lastName;
        },
        set: function (theLast) {
            this._lastName = theLast;
        },
        enumerable: false,
        configurable: true
    });
    return employ;
}());
exports.employ = employ;
