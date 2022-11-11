class employe{

    //properties
    firstName:String;  //default public access modifers
    LastName:String;

    constructor(theFirst:String,theLast:string){
        this.firstName=theFirst;
        this.LastName=theLast;          //this for refer
    }
}

let e =new employe("Poorna","prajna");//passing an argument
console.log(`Hello ${e.firstName} ${e.LastName}`);

// Note:
// --noEmitOnError -- this code is not allow to
//    generate .js file due to compilation error

//    ex: tsc --noEmitOnError filename.ts