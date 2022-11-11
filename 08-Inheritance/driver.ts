import { shape } from "./shape";
import { Circle } from "./Circle";
import{Rectangle} from "./Rectangle";

let myshape = new shape(10,15);
console.log(myshape.getInfo());

let mycircle = new Circle(5,10,20);
console.log(mycircle.getInfo());

let myrect = new Rectangle(0,0,8,4);
console.log(myrect.getInfo());
