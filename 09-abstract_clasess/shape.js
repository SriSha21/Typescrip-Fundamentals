"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shape = void 0;
var shape = /** @class */ (function () {
    function shape(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(shape.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(shape.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    shape.prototype.getInfo = function () {
        return "x=".concat(this._x, ",y=").concat(this._y);
    };
    return shape;
}());
exports.shape = shape;
