import { describe, it, expect } from 'vitest';
import sum from '.';

describe('sum', () => {
  it('should equal', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
