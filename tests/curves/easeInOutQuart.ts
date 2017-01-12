import { easeInOutQuart } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInOutQuart()', () => {
  it('easeInOutQuart(.000000) is about 0', () => {
    almostEqual(easeInOutQuart(.000000), 0, .0001);
  });
  it('easeInOutQuart(.250000) is about .03125', () => {
    almostEqual(easeInOutQuart(.250000), .03125, .0001);
  });
  it('easeInOutQuart(.333333) is about .09876543209876543', () => {
    almostEqual(easeInOutQuart(.333333), .09876543209876543, .0001);
  });
  it('easeInOutQuart(.500000) is about .5', () => {
    almostEqual(easeInOutQuart(.500000), .5, .0001);
  });
  it('easeInOutQuart(.666667) is about .9012345679012346', () => {
    almostEqual(easeInOutQuart(.666667), .9012345679012346, .0001);
  });
  it('easeInOutQuart(.750000) is about .96875', () => {
    almostEqual(easeInOutQuart(.750000), .96875, .0001);
  });
  it('easeInOutQuart(1.000000) is about 1', () => {
    almostEqual(easeInOutQuart(1.000000), 1, .0001);
  });
});
