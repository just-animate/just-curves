import { easeOutCubic } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeOutCubic()', () => {
  it('easeOutCubic(.000000) is about 0', () => {
    almostEqual(easeOutCubic(.000000), 0, .0001);
  });
  it('easeOutCubic(.250000) is about .578125', () => {
    almostEqual(easeOutCubic(.250000), .578125, .0001);
  });
  it('easeOutCubic(.333333) is about .7037037037037036', () => {
    almostEqual(easeOutCubic(.333333), .7037037037037036, .0001);
  });
  it('easeOutCubic(.500000) is about .875', () => {
    almostEqual(easeOutCubic(.500000), .875, .0001);
  });
  it('easeOutCubic(.666667) is about .9629629629629629', () => {
    almostEqual(easeOutCubic(.666667), .9629629629629629, .0001);
  });
  it('easeOutCubic(.750000) is about .984375', () => {
    almostEqual(easeOutCubic(.750000), .984375, .0001);
  });
  it('easeOutCubic(1.000000) is about 1', () => {
    almostEqual(easeOutCubic(1.000000), 1, .0001);
  });
});
