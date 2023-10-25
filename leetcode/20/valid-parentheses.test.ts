import { describe, expect, it } from 'bun:test';
import { isValid } from './valid-parentheses';

describe('20-valid-parentheses.test', () => {
  it('Case 1', () => {
    expect(isValid('()')).toEqual(true);
  });
  it('Case 2', () => {
    expect(isValid('()[]{}')).toEqual(true);
  });
  it('Case 3', () => {
    expect(isValid('(]')).toEqual(false);
  });
});
