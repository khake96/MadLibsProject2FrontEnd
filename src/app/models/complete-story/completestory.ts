export class CompleteStory {

    constructor(public id:number, public completedDate:Date,
        public incompleteStory:string, public upVoteCount:number,
        public completerId:number, public parentStoryId:number){};
}
