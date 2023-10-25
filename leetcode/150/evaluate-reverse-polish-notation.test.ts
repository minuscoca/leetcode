import { describe, expect, it } from 'bun:test';
import { evalRPN } from './evaluate-reverse-polish-notation';

describe('150-evaluate-reverse-polish-notation.test', () => {
  it('Case 1', () => {
    expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9);
  });
  it('Case 2', () => {
    expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6);
  });
  it('Case 3', () => {
    expect(
      evalRPN([
        '10',
        '6',
        '9',
        '3',
        '+',
        '-11',
        '*',
        '/',
        '*',
        '17',
        '+',
        '5',
        '+',
      ])
    ).toBe(22);
  });
});
