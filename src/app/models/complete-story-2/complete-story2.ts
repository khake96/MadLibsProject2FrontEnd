import { IncompleteStory } from "../incomplete-story/incompletestory";

export class CompleteStory2 {

    constructor() { }

    private _parentStory: IncompleteStory;
    private _userId: number;
    private _completedStory: string;

    public get parentStory(): IncompleteStory {
        return this._parentStory;
    }
    public set parentStory(value: IncompleteStory) {
        this._parentStory = value;
    }
    public get userId(): number {
        return this._userId;
    }
    public set userId(value: number) {
        this._userId = value;
    }
    public get completedStory(): string {
        return this._completedStory;
    }
    public set completedStory(value: string) {
        this._completedStory = value;
    }
}
