import { describe, expect, it } from 'bun:test';
import { isAnagram } from './valid-anagram';

describe('242-valid-anagram', () => {
  it('Case 1', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });
  it('Case 2', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });
});
