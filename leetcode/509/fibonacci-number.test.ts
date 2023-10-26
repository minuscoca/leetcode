import { describe, expect, it } from 'bun:test';
import { fib } from './fibonacci-number';

describe('509-fibonacci-number', () => {
  it('Case 1', () => {
    expect(fib(2)).toBe(1);
  });
  it('Case 2', () => {
    expect(fib(3)).toBe(2);
  });
  it('Case 3', () => {
    expect(fib(4)).toBe(3);
  });
});
