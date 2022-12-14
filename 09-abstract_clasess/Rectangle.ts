import {shape} from './shape';
export class Rectangle extends shape{
    caluclate(): number {
return this._width * this._length;  
  }

constructor(theX:number ,theY:number,private _width: number,
    private _length: number)
    {
        super(theX,theY);
    }
    public get width(): number 
    {
        return this._width;
    }
    public set width(value: number)
     {
        this._width = value;
    }
    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }
    getInfo(): string {
        return super.getInfo() + `Width=${this._width},Length=${this._length}`;
        //overide the getInfo method
    }
}
