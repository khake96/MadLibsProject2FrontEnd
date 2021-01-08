import { IncompleteStory } from "../incomplete-story/incompletestory";
import { User } from "../user/user";

export class CompleteStory {
    //Kevin's data
    public id: number;
    public completedDate: Date;
    public completeStory: string;
    public upVoteCount: number;
    public completerName: string;
    public parentStoryGenre: string;

    //Alex's data

    private _completedStory: string;
    private _completer: User;
    private _upvoteCount: number;
    private _parentStory: IncompleteStory;

    constructor(id?: number,  completedDate?: Date,
             completeStory?: string,  upVoteCount?: number,
             completerName?: string,  parentStoryGenre?: string) {
        //Kevin's constructor
        if (id) {
            this.id = id;
            this.completedDate = completedDate;
            this.completeStory = completeStory;
            this.upVoteCount = upVoteCount;
            this.completerName = completerName;
            this.parentStoryGenre = parentStoryGenre;
        }
        //Alex's constructor
        // if (parentStory) {
        //     this.completedStory = completedStory;
        //     this.completer = completer;
        //     this.upvoteCount = upvoteCount;
            // this.parentStory = parentStory;
        // }
    };

    public get completedStory(): string {
        return this._completedStory;
    }
    public set completedStory(value: string) {
        this._completedStory = value;
    }
    public get completer(): User {
        return this._completer;
    }
    public set completer(value: User) {
        this._completer = value;
    }
    public get upvoteCount(): number {
        return this._upvoteCount;
    }
    public set upvoteCount(value: number) {
        this._upvoteCount = value;
    }
    public get parentStory(): IncompleteStory {
        return this._parentStory;
    }
    public set parentStory(value: IncompleteStory) {
        this._parentStory = value;
    }

    

    // constructor(completestory: any) {


}
