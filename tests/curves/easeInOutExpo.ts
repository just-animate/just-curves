import { easeInOutExpo } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInOutExpo()', () => {
  it('easeInOutExpo(.000000) is about 0', () => {
    almostEqual(easeInOutExpo(.000000), 0, .0001);
  });
  it('easeInOutExpo(.250000) is about .015625', () => {
    almostEqual(easeInOutExpo(.250000), .015625, .0001);
  });
  it('easeInOutExpo(.333333) is about .04960628287400622', () => {
    almostEqual(easeInOutExpo(.333333), .04960628287400622, .0001);
  });
  it('easeInOutExpo(.500000) is about .5', () => {
    almostEqual(easeInOutExpo(.500000), .5, .0001);
  });
  it('easeInOutExpo(.666667) is about .9503937171259937', () => {
    almostEqual(easeInOutExpo(.666667), .9503937171259937, .0001);
  });
  it('easeInOutExpo(.750000) is about .984375', () => {
    almostEqual(easeInOutExpo(.750000), .984375, .0001);
  });
  it('easeInOutExpo(1.000000) is about 1', () => {
    almostEqual(easeInOutExpo(1.000000), 1, .0001);
  });
});
