import { chudnovsky } from 'chudnovsky';
import { describe, expect, it } from 'vitest';

describe('chudnovsky', () => {
  it('is a function', () => {
    expect(typeof chudnovsky).toBe('function');
  });

  it('estimates pi', () => {
    // biome-ignore lint/suspicious/noApproximativeNumericConstant: not Math.PI
    expect(chudnovsky(1)).toBe(3.141_592_653_589_793_6);
  });
});
