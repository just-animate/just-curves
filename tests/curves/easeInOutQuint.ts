import { easeInOutQuint } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInOutQuint()', () => {
  it('easeInOutQuint(.000000) is about 0', () => {
    almostEqual(easeInOutQuint(.000000), 0, .0001);
  });
  it('easeInOutQuint(.250000) is about .015625', () => {
    almostEqual(easeInOutQuint(.250000), .015625, .0001);
  });
  it('easeInOutQuint(.333333) is about .06584362139917695', () => {
    almostEqual(easeInOutQuint(.333333), .06584362139917695, .0001);
  });
  it('easeInOutQuint(.500000) is about .5', () => {
    almostEqual(easeInOutQuint(.500000), .5, .0001);
  });
  it('easeInOutQuint(.666667) is about .934156378600823', () => {
    almostEqual(easeInOutQuint(.666667), .934156378600823, .0001);
  });
  it('easeInOutQuint(.750000) is about .984375', () => {
    almostEqual(easeInOutQuint(.750000), .984375, .0001);
  });
  it('easeInOutQuint(1.000000) is about 1', () => {
    almostEqual(easeInOutQuint(1.000000), 1, .0001);
  });
});
