import { StoryCategory } from './storycategory';

describe('StoryCategory', () => {
  it('should create an instance', () => {
    expect(new StoryCategory(1,"British Literature")).toBeTruthy();
  });
});