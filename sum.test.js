const sum = require('./sum');

describe('sum function', () => {
  test('adds positive numbers correctly', () => {
    expect(sum(1, 2, 3)).toBe(6);
    expect(sum(10, 20)).toBe(30);
  });

  test('handles single number', () => {
    expect(sum(5)).toBe(5);
  });

  test('handles zero', () => {
    expect(sum(0)).toBe(0);
    expect(sum(0, 0, 0)).toBe(0);
  });

  test('handles negative numbers', () => {
    expect(sum(-1, -2, -3)).toBe(-6);
    expect(sum(-5, 5)).toBe(0);
  });

  test('handles no arguments', () => {
    expect(sum()).toBe(0);
  });

  test('handles decimal numbers', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    expect(sum(1.5, 2.5)).toBe(4);
  });
});
