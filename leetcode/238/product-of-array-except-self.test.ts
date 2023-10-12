import { describe, expect, it } from 'bun:test';
import { productExceptSelf } from './product-of-array-except-self';

describe('238-product-of-array-except-self', () => {
  it('Case 1', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });
  it('Case 2', () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
  });
});
