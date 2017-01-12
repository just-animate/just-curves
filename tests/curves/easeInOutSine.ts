import { easeInOutSine } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInOutSine()', () => {
  it('easeInOutSine(.000000) is about 0', () => {
    almostEqual(easeInOutSine(.000000), 0, .0001);
  });
  it('easeInOutSine(.250000) is about .1464466094067262', () => {
    almostEqual(easeInOutSine(.250000), .1464466094067262, .0001);
  });
  it('easeInOutSine(.333333) is about .24999999999999994', () => {
    almostEqual(easeInOutSine(.333333), .24999999999999994, .0001);
  });
  it('easeInOutSine(.500000) is about .49999999999999994', () => {
    almostEqual(easeInOutSine(.500000), .49999999999999994, .0001);
  });
  it('easeInOutSine(.666667) is about .7499999999999999', () => {
    almostEqual(easeInOutSine(.666667), .7499999999999999, .0001);
  });
  it('easeInOutSine(.750000) is about .8535533905932737', () => {
    almostEqual(easeInOutSine(.750000), .8535533905932737, .0001);
  });
  it('easeInOutSine(1.000000) is about 1', () => {
    almostEqual(easeInOutSine(1.000000), 1, .0001);
  });
});

