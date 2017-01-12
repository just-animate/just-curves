import { easeInQuint } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInQuint()', () => {
  it('easeInQuint(.000000) is about 0', () => {
    almostEqual(easeInQuint(.000000), 0, .0001);
  });
  it('easeInQuint(.250000) is about .0009765625', () => {
    almostEqual(easeInQuint(.250000), .0009765625, .0001);
  });
  it('easeInQuint(.333333) is about .004115226337448559', () => {
    almostEqual(easeInQuint(.333333), .004115226337448559, .0001);
  });
  it('easeInQuint(.500000) is about .03125', () => {
    almostEqual(easeInQuint(.500000), .03125, .0001);
  });
  it('easeInQuint(.666667) is about .1316872427983539', () => {
    almostEqual(easeInQuint(.666667), .1316872427983539, .0001);
  });
  it('easeInQuint(.750000) is about .2373046875', () => {
    almostEqual(easeInQuint(.750000), .2373046875, .0001);
  });
  it('easeInQuint(1.000000) is about 1', () => {
    almostEqual(easeInQuint(1.000000), 1, .0001);
  });
});
