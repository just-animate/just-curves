import * as assert from 'assert';

export const almostEqual = (a: number, b: number, precision: number): void => {
  assert(Math.abs(a - b) < precision, `expected ${a} to almost equal ${b}`);
};
