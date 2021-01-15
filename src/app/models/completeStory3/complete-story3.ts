export class CompleteStory3 {

    constructor() { }

    private _completedStoryId: number;
    public get completedStoryId(): number {
        return this._completedStoryId;
    }
    public set completedStoryId(value: number) {
        this._completedStoryId = value;
    }
    private _completedStory: string;
    public get completedStory(): string {
        return this._completedStory;
    }
    public set completedStory(value: string) {
        this._completedStory = value;
    }
    private _originalStory: string;
    public get originalStory(): string {
        return this._originalStory;
    }
    public set originalStory(value: string) {
        this._originalStory = value;
    }
    private _authorBook: string;
    public get authorBook(): string {
        return this._authorBook;
    }
    public set authorBook(value: string) {
        this._authorBook = value;
    }
    private _authorFirstName: string;
    public get authorFirstName(): string {
        return this._authorFirstName;
    }
    public set authorFirstName(value: string) {
        this._authorFirstName = value;
    }
    private _authorLastName: string;
    public get authorLastName(): string {
        return this._authorLastName;
    }
    public set authorLastName(value: string) {
        this._authorLastName = value;
    }

}
