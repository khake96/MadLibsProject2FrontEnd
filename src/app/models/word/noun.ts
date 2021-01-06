import { Word } from "./word";

export class Noun {
    private _fl:string;
    private _sls:string;
    private _orig:string;

    constructor(){
        
    };

    public get fl() {
        return this._fl;
    }

    public set fl(theFl:string) {
        this._fl = theFl;
    }

    public get sls() {
        return this._sls;
    }

    public set sls(theSls:string) {
        this._sls = theSls;
    }

    public get orig() {
        return this._orig;
    }

    public set orig(theOrig:string) {
        this._orig = theOrig;
    }
}
