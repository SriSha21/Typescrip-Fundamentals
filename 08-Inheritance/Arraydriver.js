"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myshape = new shape_1.shape(10, 15);
var mycircle = new Circle_1.Circle(5, 10, 20);
var myrect = new Rectangle_1.Rectangle(0, 0, 8, 4);
var arrayshape = [];
arrayshape.push(myshape);
arrayshape.push(mycircle);
arrayshape.push(myrect);
for (var _i = 0, arrayshape_1 = arrayshape; _i < arrayshape_1.length; _i++) {
    var temp = arrayshape_1[_i];
    console.log(temp.getInfo());
}
