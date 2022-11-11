"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myshape = new shape_1.shape(10, 15);
console.log(myshape.getInfo());
var mycircle = new Circle_1.Circle(5, 10, 20);
console.log(mycircle.getInfo());
var myrect = new Rectangle_1.Rectangle(0, 0, 8, 4);
console.log(myrect.getInfo());
