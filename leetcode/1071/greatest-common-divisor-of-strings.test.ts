import { describe, expect, it } from 'bun:test';
import { gcdOfStrings } from './greatest-common-divisor-of-strings';

describe('1071-greatest-common-divisor-of-strings', () => {
  it('Case 1', () => {
    expect(gcdOfStrings('ABCABC', 'ABC')).toBe('ABC');
  });
  it('Case 2', () => {
    expect(gcdOfStrings('ABABAB', 'AB')).toBe('AB');
  });
  it('Case 3', () => {
    expect(gcdOfStrings('LEET', 'CODE')).toBe('');
  });
  it('Case 4', () => {
    expect(gcdOfStrings('ABABABAB', 'ABAB')).toBe('ABAB');
  });
  it('Case 5', () => {
    expect(
      gcdOfStrings(
        'TAUXXTAUXXTAUXXTAUXXTAUXX',
        'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX'
      )
    ).toBe('TAUXX');
  });
});
