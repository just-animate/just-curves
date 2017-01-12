import { easeInBack } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInBack()', () => {
  it('easeInBack(.000000) is about 0', () => {
    almostEqual(easeInBack(.000000), 0, .0001);
  });
  it('easeInBack(.250000) is about -.06413656250000001', () => {
    almostEqual(easeInBack(.250000), -.06413656250000001, .0001);
  });
  it('easeInBack(.333333) is about -.08900592592592595', () => {
    almostEqual(easeInBack(.333333), -.08900592592592595, .0001);
  });
  it('easeInBack(.500000) is about -.08769750000000004', () => {
    almostEqual(easeInBack(.500000), -.08769750000000004, .0001);
  });
  it('easeInBack(.666667) is about .044210370370370254', () => {
    almostEqual(easeInBack(.666667), .044210370370370254, .0001);
  });
  it('easeInBack(.750000) is about .1825903124999999', () => {
    almostEqual(easeInBack(.750000), .1825903124999999, .0001);
  });
  it('easeInBack(1.000000) is about .9999999999999998', () => {
    almostEqual(easeInBack(1.000000), .9999999999999998, .0001);
  });
});
