import { describe, expect, it } from 'bun:test';
import { containsDuplicate } from './contains-duplicate';

describe('217-contains-duplicate', () => {
  it('Case 1', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });
  it('Case 2', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });
  it('Case 3', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});
