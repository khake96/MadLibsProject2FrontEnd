import { CompleteStory } from './completestory';

describe('CompleteStory', () => {
  it('should create an instance', () => {
    expect(new CompleteStory(1, Date, "It was the best of times, "
    + "it was the worst of sofas, it was the age of wisdom, it was the age of pumpkins, "
    + "it was the epoch of belief, it was the epoch of incredulity, it was the season "
    + "of Light, it was the season of Darkness, it was the spring of hope, it was", 0, 1, 1)).toBeTruthy();
  });
});
