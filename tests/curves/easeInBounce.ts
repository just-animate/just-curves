import { easeInBounce } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInBounce()', () => {
  it('easeInBounce(.000000) is about 0', () => {
    almostEqual(easeInBounce(.000000), 0, .0001);
  });
  it('easeInBounce(.250000) is about .02734375', () => {
    almostEqual(easeInBounce(.250000), .02734375, .0001);
  });
  it('easeInBounce(.333333) is about .13888888888888873', () => {
    almostEqual(easeInBounce(.333333), .13888888888888873, .0001);
  });
  it('easeInBounce(.500000) is about .234375', () => {
    almostEqual(easeInBounce(.500000), .234375, .0001);
  });
  it('easeInBounce(.666667) is about .1597222222222221', () => {
    almostEqual(easeInBounce(.666667), .1597222222222221, .0001);
  });
  it('easeInBounce(.750000) is about .52734375', () => {
    almostEqual(easeInBounce(.750000), .52734375, .0001);
  });
  it('easeInBounce(1.000000) is about 1', () => {
    almostEqual(easeInBounce(1.000000), 1, .0001);
  });
});
