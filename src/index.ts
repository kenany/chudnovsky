import factorial from 'factorial';

/**
 * Estimates pi using the Chudnovsky algorithm by evaluating the infinite series
 * up to `n` terms.
 *
 * @param n The number of terms to evaluate in the series
 * @returns An approximation of pi
 */
export function chudnovsky(n: number): number {
  let ret = 0;

  for (let k = 0; k <= n; k++) {
    const x =
      ((-1) ** k * factorial(6 * k) * (163 * 3_344_418 * k + 13_591_409)) /
      (factorial(3 * k) * factorial(k) ** 3 * 640_320 ** (3 * k + 3 / 2));
    ret += x;
  }

  ret *= 12;

  return 1 / ret;
}
