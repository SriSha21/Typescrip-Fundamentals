export class employ{

    constructor(private _firstName:string,
        private _lastName:string){
           //defines properties assigns automatically
           //similar to constructor in getset.ts 
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


 