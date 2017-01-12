import { easeInOutCubic } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInOutCubic()', () => {

  it('easeInOutCubic(.000000) is about 0', () => {
    almostEqual(easeInOutCubic(.000000), 0, .0001);
  });
  it('easeInOutCubic(.250000) is about .0625', () => {
    almostEqual(easeInOutCubic(.250000), .0625, .0001);
  });
  it('easeInOutCubic(.333333) is about .14814814814814814', () => {
    almostEqual(easeInOutCubic(.333333), .14814814814814814, .0001);
  });
  it('easeInOutCubic(.500000) is about .5', () => {
    almostEqual(easeInOutCubic(.500000), .5, .0001);
  });
  it('easeInOutCubic(.666667) is about .8518518518518519', () => {
    almostEqual(easeInOutCubic(.666667), .8518518518518519, .0001);
  });
  it('easeInOutCubic(.750000) is about .9375', () => {
    almostEqual(easeInOutCubic(.750000), .9375, .0001);
  });
  it('easeInOutCubic(1.000000) is about 1', () => {
    almostEqual(easeInOutCubic(1.000000), 1, .0001);
  });
});
