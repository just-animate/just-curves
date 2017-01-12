import { easeOutQuint } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeOutQuint()', () => {
  it('easeOutQuint(.000000) is about 0', () => {
    almostEqual(easeOutQuint(.000000), 0, .0001);
  });
  it('easeOutQuint(.250000) is about .7626953125', () => {
    almostEqual(easeOutQuint(.250000), .7626953125, .0001);
  });
  it('easeOutQuint(.333333) is about .868312757201646', () => {
    almostEqual(easeOutQuint(.333333), .868312757201646, .0001);
  });
  it('easeOutQuint(.500000) is about .96875', () => {
    almostEqual(easeOutQuint(.500000), .96875, .0001);
  });
  it('easeOutQuint(.666667) is about .9958847736625515', () => {
    almostEqual(easeOutQuint(.666667), .9958847736625515, .0001);
  });
  it('easeOutQuint(.750000) is about .9990234375', () => {
    almostEqual(easeOutQuint(.750000), .9990234375, .0001);
  });
  it('easeOutQuint(1.000000) is about 1', () => {
    almostEqual(easeOutQuint(1.000000), 1, .0001);
  });
});
