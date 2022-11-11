"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Golf_1 = require("./Golf");
var Cricket_1 = require("./Cricket");
var myCricket = new Cricket_1.Cricket();
var myGolf = new Golf_1.Golf();
var temp = [];
temp.push(myCricket);
temp.push(myGolf);
for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
    var tempcoach = temp_1[_i];
    console.log(tempcoach.getDailyWorkout());
}
