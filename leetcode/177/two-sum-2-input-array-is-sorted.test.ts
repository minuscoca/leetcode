import { describe, expect, it } from 'bun:test';
import { twoSum } from './two-sum-2-input-array-is-sorted';

describe('167-two-sum-2-input-array-is-sorted', () => {
  it('Case 1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });
  it('Case 2', () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  });
  it('Case 3', () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });
  it('Case 4', () => {
    expect(twoSum([0, 0, 3, 4], 0)).toEqual([1, 2]);
  });
  it('Case 5', () => {
    expect(twoSum([5, 25, 75], 100)).toEqual([2, 3]);
  });
});
