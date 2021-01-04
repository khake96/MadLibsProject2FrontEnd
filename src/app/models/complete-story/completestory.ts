export class CompleteStory {

    constructor(public id:number, public completedDate:Date,
        public completeStory:string, public upVoteCount:number,
        public completerName:string, public parentStoryGenre:string){};
}
