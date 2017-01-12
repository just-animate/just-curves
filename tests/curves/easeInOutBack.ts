import { easeInOutBack } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInOutBack()', () => {

  it('easeInOutBack(.000000) is about 0', () => {
    almostEqual(easeInOutBack(.000000), 0, .0001);
  });
  it('easeInOutBack(.250000) is about -.09968184375', () => {
    almostEqual(easeInOutBack(.250000), -.09968184375, .0001);
  });
  it('easeInOutBack(.333333) is about -.0440673703703704', () => {
    almostEqual(easeInOutBack(.333333), -.0440673703703704, .0001);
  });
  it('easeInOutBack(.500000) is about .5', () => {
    almostEqual(easeInOutBack(.500000), .5, .0001);
  });
  it('easeInOutBack(.666667) is about 1.0440673703703702', () => {
    almostEqual(easeInOutBack(.666667), 1.0440673703703702, .0001);
  });
  it('easeInOutBack(.750000) is about 1.09968184375', () => {
    almostEqual(easeInOutBack(.750000), 1.09968184375, .0001);
  });
  it('easeInOutBack(1.000000) is about 1', () => {
    almostEqual(easeInOutBack(1.000000), 1, .0001);
  });
});
