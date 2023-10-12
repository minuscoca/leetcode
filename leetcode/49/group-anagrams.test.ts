import { describe, expect, it } from 'bun:test';
import { groupAnagrams } from './group-anagrams';

describe('49-group-anagrams', () => {
  // it('Case 1', () => {
  //   const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
  //   expect(result).toContain(['bat']);
  //   expect(result).toContain(['nat', 'tan']);
  //   expect(result).toContain(['ate', 'eat', 'tea']);
  // });
  it('Case 2', () => {
    expect(groupAnagrams([''])).toEqual([['']]);
  });
  it('Case 3', () => {
    expect(groupAnagrams(['a'])).toEqual([['a']]);
  });
});
