import { User } from "./models/user/user";
import { IncompleteStory } from "src/app/models/incomplete-story/incompletestory";

export class Globals {

    public currentUser = new User(1,"John","Smith","john.smith@email.com",1,2020); // private because only want to access through getCurrentUser()
    // public currentIncompleteStory = new IncompleteStory(1, "Charles","Dickens", "It was the best of times, "
    // + "it was the worst of <pn>, it was the age of wisdom, it was the age of <pn>, "
    // + "it was the epoch of belief, it was the epoch of incredulity, it was the season "
    // + "of Light, it was the season of Darkness, it was the spring of hope, it was", "It was the best of times, "
    // + "it was the worst of <pn>, it was the age of wisdom, it was the age of <pn>, "
    // + "it was the epoch of belief, it was the epoch of incredulity, it was the season "
    // + "of Light, it was the season of Darkness, it was the spring of hope, it was", "A Tale of Two Cities", 
    // 5, 1, 1)
    public apiURL:string = "http://3.87.40.168/madlibs";
    public apiTitle:string = "Literary Madlibs";

    constructor() { }
  
    // getCurrentUser() {
    //   return this.currentUser
    //     ? Observable.of(this.currentUser) // wrap cached value for consistent return value
    //     : this.http.get('api/login/currentUser')
    //         .do(data => { this.currentUser = data }) // cache it for next call
    //         .catch(error => this.handleError(error, 'currentUser'));

    // getCurrentStory() {
    //   return this.currentUser
    //     ? Observable.of(this.currentUser) // wrap cached value for consistent return value
    //     : this.http.get('api/login/currentUser')
    //         .do(data => { this.currentUser = data }) // cache it for next call
    //         .catch(error => this.handleError(error, 'currentUser'));
 } 