import { IncompleteStory } from "../incomplete-story/incompletestory";

export class CompleteStory2 {

    constructor() { }

    private parentStory: number;
    private userId: number;
    private completedStory: string;

    public get parentStoryf(): number {
        return this.parentStory;
    }
    public set parentStoryf(value: number) {
        this.parentStory = value;
    }
    public get userIdf(): number {
        return this.userId;
    }
    public set userIdf(value: number) {
        this.userId = value;
    }
    public get completedStoryf(): string {
        return this.completedStory;
    }
    public set completedStoryf(value: string) {
        this.completedStory = value;
    }
}
