/// <reference path="../node_modules/@types/node/index.d.ts" />
/// <reference path="../node_modules/@types/mocha/index.d.ts" />
import * as assert from 'assert';

export const almostEqual = (a: number, b: number, precision: number): void => {
  assert(Math.abs(a - b) < precision, `expected ${a} to almost equal ${b}`);
};
