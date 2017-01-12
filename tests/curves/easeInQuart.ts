import { easeInQuart } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInQuart()', () => {
  it('easeInQuart(.000000) is about 0', () => {
    almostEqual(easeInQuart(.000000), 0, .0001);
  });
  it('easeInQuart(.250000) is about .00390625', () => {
    almostEqual(easeInQuart(.250000), .00390625, .0001);
  });
  it('easeInQuart(.333333) is about .012345679012345678', () => {
    almostEqual(easeInQuart(.333333), .012345679012345678, .0001);
  });
  it('easeInQuart(.500000) is about .0625', () => {
    almostEqual(easeInQuart(.500000), .0625, .0001);
  });
  it('easeInQuart(.666667) is about .19753086419753085', () => {
    almostEqual(easeInQuart(.666667), .19753086419753085, .0001);
  });
  it('easeInQuart(.750000) is about .31640625', () => {
    almostEqual(easeInQuart(.750000), .31640625, .0001);
  });
  it('easeInQuart(1.000000) is about 1', () => {
    almostEqual(easeInQuart(1.000000), 1, .0001);
  });
});
