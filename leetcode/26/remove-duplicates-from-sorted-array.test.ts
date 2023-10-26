import { describe, expect, it } from 'bun:test';
import { removeDuplicates } from './remove-duplicates-from-sorted-array';

describe('26-remove-duplicates-from-sorted-array', () => {
  it('Case 1', () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
  });
  it('Case 2', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  });
});
