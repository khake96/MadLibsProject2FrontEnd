export class IncompleteStory {

    constructor(public id:number, public autherFirstName:string,
        public autherLastName:string, public incompleteStory:string,
        public missingWordCount:number, public categoryId:number,
        public storyLevelId:number){};
}
