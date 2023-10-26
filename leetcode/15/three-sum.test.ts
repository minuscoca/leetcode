import { describe, expect, it } from 'bun:test';
import { threeSum } from './three-sum';

describe('15-three-sum', () => {
  it('Case 1', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });
  it('Case 2', () => {
    expect(threeSum([0, 1, 1])).toEqual([]);
  });
  it('Case 3', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });
});
