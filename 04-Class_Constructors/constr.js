var employe = /** @class */ (function () {
    function employe(theFirst, theLast) {
        this.firstName = theFirst;
        this.LastName = theLast;
    }
    return employe;
}());
var e = new employe("Poorna", "prajna"); //instance
console.log("Hello ".concat(e.firstName, " ").concat(e.LastName));
