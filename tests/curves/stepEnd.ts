import { almostEqual } from '../assertions';
import { stepEnd } from '../../src/curves';

describe('stepEnd()', () => {
  it('stepEnd(0) is about 0', () => {
    almostEqual(stepEnd(0), 0, .0001);
  });
  it('stepEnd(.250000) is about 0', () => {
    almostEqual(stepEnd(.250000), 0, .0001);
  });
  it('stepEnd(.333333) is about 0', () => {
    almostEqual(stepEnd(.333333), 0, .0001);
  });
  it('stepEnd(.500000) is about 0', () => {
    almostEqual(stepEnd(.500000), 0, .0001);
  });
  it('stepEnd(.666667) is about 0', () => {
    almostEqual(stepEnd(.666667), 0, .0001);
  });
  it('stepEnd(.750000) is about 0', () => {
    almostEqual(stepEnd(.750000), 0, .0001);
  });
  it('stepEnd(1) is about 1', () => {
    almostEqual(stepEnd(1), 1, .0001);
  });
});
