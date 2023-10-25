import { describe, expect, it } from 'bun:test';
import { isPalindrome } from './valid-palindrome';

describe('125-valid-palindrome', () => {
  it('Case 1', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });
  it('Case 2', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });
  it('Case 3', () => {
    expect(isPalindrome(' ')).toBe(true);
  });
  it('Case ˋ', () => {
    expect(isPalindrome('0P')).toBe(false);
  });
});
