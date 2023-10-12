import { describe, expect, it } from 'bun:test';
import { topKFrequent } from './top-k-frequent-elements';

describe('347-top-k-frequent-elements', () => {
  it('Case 1', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });
  it('Case 2', () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });
});
