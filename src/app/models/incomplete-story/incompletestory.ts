export class IncompleteStory {

    private _storyId: number;
    private _originalStory: string;
    private _missingWordCount: number;
    private _incompleteStory: string;
    private _authorLastName: string;
    private _authorFirstName: string;
    private _authorBook: string;

    constructor( ) { };

    public get storyId(): number {
        return this._storyId;
    }
    public set storyId(value: number) {
        this._storyId = value;
    }
    
    public get originalStory(): string {
        return this._originalStory;
    }
    public set originalStory(value: string) {
        this._originalStory = value;
    }
    
    public get missingWordCount(): number {
        return this._missingWordCount;
    }
    public set missingWordCount(value: number) {
        this._missingWordCount = value;
    }
    
    public get incompleteStory(): string {
        return this._incompleteStory;
    }
    public set incompleteStory(value: string) {
        this._incompleteStory = value;
    }
    
    public get authorLastName(): string {
        return this._authorLastName;
    }
    public set authorLastName(value: string) {
        this._authorLastName = value;
    }
    
    public get authorFirstName(): string {
        return this._authorFirstName;
    }
    public set authorFirstName(value: string) {
        this._authorFirstName = value;
    }
    
    public get authorBook(): string {
        return this._authorBook;
    }
    public set authorBook(value: string) {
        this._authorBook = value;
    }

    


}
