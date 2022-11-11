let numbers:number[] =[2,3.4,5,1.11,8] ;//array declaration
let total:number = 0;
for(let i =0;i<numbers.length;i++){
console.log(numbers[i]);
total +=numbers[i];
}

let average:number = total/numbers.length;
console.log(average);

//array of any type

let i:any=0;
let checkArray:any[] =[2,3.4,5,1.11,8,"apple",true,'orange'] ;//array declaration
for( i;i<checkArray.length;i++){
console.log(checkArray[i]);
}

//simplified for loop using of

let checkarray:string[] =["apple",'orange','kiwi','grapes'];
checkarray.push("Pineapple");
for(let off of checkarray){
    console.log(off);
    console.log(checkarray[1]+checkarray[2]);

    //conditional statement

    if(off=="Pineapple")
    {
        console.log("I ate Pineapple");
    }
    else{
        console.log("I Don't like Pineapple");

    }
} 