import { shape } from "./shape";
import { Circle } from "./Circle";
import{Rectangle} from "./Rectangle";

let myshape = new shape(10,15);
let mycircle = new Circle(5,10,20);
let myrect = new Rectangle(0,0,8,4);

let arrayshape:shape[] = [];

arrayshape.push(myshape);
arrayshape.push(mycircle);
arrayshape.push(myrect);

for(let temp of arrayshape){
    console.log(temp.getInfo());
}