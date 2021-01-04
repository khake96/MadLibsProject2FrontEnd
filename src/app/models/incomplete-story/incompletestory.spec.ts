import { IncompleteStory } from './incompletestory';

describe('IncompleteStory', () => {
  it('should create an instance', () => {
    expect(new IncompleteStory(1, "Charles","Dickens", "It was the best of times, "
    + "it was the worst of <pn>, it was the age of wisdom, it was the age of <pn>, "
    + "it was the epoch of belief, it was the epoch of incredulity, it was the season "
    + "of Light, it was the season of Darkness, it was the spring of hope, it was", "It was the best of times, "
    + "it was the worst of <pn>, it was the age of wisdom, it was the age of <pn>, "
    + "it was the epoch of belief, it was the epoch of incredulity, it was the season "
    + "of Light, it was the season of Darkness, it was the spring of hope, it was", "A Tale of Two Cities", 
    5, 1, 1)).toBeTruthy();
  });
});
