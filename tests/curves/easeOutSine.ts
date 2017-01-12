import { easeOutSine } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeOutSine()', () => {
  it('easeOutSine(.000000) is about 0', () => {
    almostEqual(easeOutSine(.000000), 0, .0001);
  });
  it('easeOutSine(.250000) is about .3826834323650898', () => {
    almostEqual(easeOutSine(.250000), .3826834323650898, .0001);
  });
  it('easeOutSine(.333333) is about .49999999999999994', () => {
    almostEqual(easeOutSine(.333333), .49999999999999994, .0001);
  });
  it('easeOutSine(.500000) is about .7071067811865475', () => {
    almostEqual(easeOutSine(.500000), .7071067811865475, .0001);
  });
  it('easeOutSine(.666667) is about .8660254037844386', () => {
    almostEqual(easeOutSine(.666667), .8660254037844386, .0001);
  });
  it('easeOutSine(.750000) is about .9238795325112867', () => {
    almostEqual(easeOutSine(.750000), .9238795325112867, .0001);
  });
  it('easeOutSine(1.000000) is about 1', () => {
    almostEqual(easeOutSine(1.000000), 1, .0001);
  });
});
