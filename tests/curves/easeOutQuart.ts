import { easeOutQuart } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeOutQuart()', () => {
  it('easeOutQuart(.000000) is about 0', () => {
    almostEqual(easeOutQuart(.000000), 0, .0001);
  });
  it('easeOutQuart(.250000) is about .68359375', () => {
    almostEqual(easeOutQuart(.250000), .68359375, .0001);
  });
  it('easeOutQuart(.333333) is about .802469135802469', () => {
    almostEqual(easeOutQuart(.333333), .802469135802469, .0001);
  });
  it('easeOutQuart(.500000) is about .9375', () => {
    almostEqual(easeOutQuart(.500000), .9375, .0001);
  });
  it('easeOutQuart(.666667) is about .9876543209876543', () => {
    almostEqual(easeOutQuart(.666667), .9876543209876543, .0001);
  });
  it('easeOutQuart(.750000) is about .99609375', () => {
    almostEqual(easeOutQuart(.750000), .99609375, .0001);
  });
  it('easeOutQuart(1.000000) is about 1', () => {
    almostEqual(easeOutQuart(1.000000), 1, .0001);
  });
});
