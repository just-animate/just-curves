import { stepStart } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('stepStart()', () => {
  it('stepStart(0) is about 1', () => {
    almostEqual(stepStart(0), 1, .0001);
  });
  it('stepStart(.250000) is about 1', () => {
    almostEqual(stepStart(.250000), 1, .0001);
  });
  it('stepStart(.333333) is about 1', () => {
    almostEqual(stepStart(.333333), 1, .0001);
  });
  it('stepStart(.500000) is about 1', () => {
    almostEqual(stepStart(.500000), 1, .0001);
  });
  it('stepStart(.666667) is about 1', () => {
    almostEqual(stepStart(.666667), 1, .0001);
  });
  it('stepStart(.750000) is about 1', () => {
    almostEqual(stepStart(.750000), 1, .0001);
  });
  it('stepStart(1) is about 1', () => {
    almostEqual(stepStart(1), 1, .0001);
  });
});
