class empl{
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst:string,theLast:string){
        this. _firstName=theFirst;
        this. _lastName=theLast;          //this for refer
    }    
    
    public get FirstName():string{   //get method
        return this._firstName;
    }
    public set FirstName(theFirst:string){    //set method
        this._firstName=theFirst;
    } 
    public get LastName():string{   //get method
        return this._lastName;
    }
    public set LastName(theLast:string){    //set method
        this._lastName=theLast;
    } 
}

//instance

let em =new empl("Srihari","SriGuru");

console.log(em.FirstName);
console.log(em.LastName);

//tsc --target ES5 --noEmitOnError getset.ts
// - bcoz acessors support only in ECAMScript 