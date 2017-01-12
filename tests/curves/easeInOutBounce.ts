import { almostEqual } from '../assertions';
import { easeInOutBounce } from '../../src/curves';

describe('easeInOutBounce()', () => {
  it('easeInOutBounce(.000000) is about 0', () => {
    almostEqual(easeInOutBounce(.000000), 0, .0001);
  });
  it('easeInOutBounce(.250000) is about .1171875', () => {
    almostEqual(easeInOutBounce(.250000), .1171875, .0001);
  });
  it('easeInOutBounce(.333333) is about .07986111111111105', () => {
    almostEqual(easeInOutBounce(.333333), .07986111111111105, .0001);
  });
  it('easeInOutBounce(.500000) is about .5', () => {
    almostEqual(easeInOutBounce(.500000), .5, .0001);
  });
  it('easeInOutBounce(.666667) is about .9201388888888886', () => {
    almostEqual(easeInOutBounce(.666667), .9201388888888886, .0001);
  });
  it('easeInOutBounce(.750000) is about .8828125', () => {
    almostEqual(easeInOutBounce(.750000), .8828125, .0001);
  });
  it('easeInOutBounce(1.000000) is about 1', () => {
    almostEqual(easeInOutBounce(1.000000), 1, .0001);
  });
});
