"use strict";
var employ = /** @class */ (function () {
    function employ(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast; //this for refer
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
//instance
var emp = new employ("Srihari", "SriGuru");
console.log(emp.FirstName);
console.log(emp.LastName);
//tsc --target ES5 --noEmitOnError getset.ts
// - bcoz acessors support only in ECAMScript 
