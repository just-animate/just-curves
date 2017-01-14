import { easeInOut } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInOut()', () => {
  it('easeInOut(0) is about 0', () => {
    almostEqual(easeInOut(0), 0, .0001);
  });
  it('easeInOut(.250000) is about .129164', () => {
    almostEqual(easeInOut(.250000), .129164, .0001);
  });
  it('easeInOut(.333333) is about .231776', () => {
    almostEqual(easeInOut(.333333), .231776, .0001);
  });
  it('easeInOut(.500000) is about .500000', () => {
    almostEqual(easeInOut(.500000), .500000, .0001);
  });
  it('easeInOut(.666667) is about .768224', () => {
    almostEqual(easeInOut(.666667), .768224, .0001);
  });
  it('easeInOut(.750000) is about .870836', () => {
    almostEqual(easeInOut(.750000), .870836, .0001);
  });
  it('easeInOut(1) is about 1', () => {
    almostEqual(easeInOut(1), 1, .0001);
  });
});
