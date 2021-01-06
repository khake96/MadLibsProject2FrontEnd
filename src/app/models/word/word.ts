export class Word {
    private _fl: string;
    public get fl(): string {
        return this._fl;
    }
    public set fl(value: string) {
        this._fl = value;
    }
    public sls:string;

    constructor(fl:string, sls:string){
        this.fl = fl;
        this.sls = sls;
    };

}
