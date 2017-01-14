import { almostEqual } from '../assertions';
import { easeIn } from '../../src/curves';

describe('easeIn()', () => {
  it('easeIn(0) is about 0', () => {
    almostEqual(easeIn(0), 0, .0001);
  });
  it('easeIn(.250000) is about .093460', () => {
    almostEqual(easeIn(.250000), .093460, .0001);
  });
  it('easeIn(.333333) is about .156164', () => {
    almostEqual(easeIn(.333333), .156164, .0001);
  });
  it('easeIn(.500000) is about .315355', () => {
    almostEqual(easeIn(.500000), .315355, .0001);
  });
  it('easeIn(.666667) is about .511649', () => {
    almostEqual(easeIn(.666667), .511649, .0001);
  });
  it('easeIn(.750000) is about .621854', () => {
    almostEqual(easeIn(.750000), .621854, .0001);
  });
  it('easeIn(1) is about 1', () => {
    almostEqual(easeIn(1), 1, .0001);
  });
});
