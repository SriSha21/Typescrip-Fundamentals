import { Golf } from "./Golf";
import { Cricket } from "./Cricket";
import { coach } from "./Coach";


let myCricket = new Cricket();
let myGolf = new Golf();


let temp:coach[] = [];
temp.push(myCricket);
temp.push(myGolf);

for(let tempcoach of temp)
{
    console.log(tempcoach.getDailyWorkout());
}