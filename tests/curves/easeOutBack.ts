import { easeOutBack } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeOutBack()', () => {
  it('easeOutBack(.000000) is about 2.220446049250313e-16', () => {
    almostEqual(easeOutBack(.000000), 2.220446049250313e-16, .0001);
  });
  it('easeOutBack(.250000) is about .8174096875000001', () => {
    almostEqual(easeOutBack(.250000), .8174096875000001, .0001);
  });
  it('easeOutBack(.333333) is about .9557896296296297', () => {
    almostEqual(easeOutBack(.333333), .9557896296296297, .0001);
  });
  it('easeOutBack(.500000) is about 1.0876975', () => {
    almostEqual(easeOutBack(.500000), 1.0876975, .0001);
  });
  it('easeOutBack(.666667) is about 1.089005925925926', () => {
    almostEqual(easeOutBack(.666667), 1.089005925925926, .0001);
  });
  it('easeOutBack(.750000) is about 1.0641365625', () => {
    almostEqual(easeOutBack(.750000), 1.0641365625, .0001);
  });
  it('easeOutBack(1.000000) is about 1', () => {
    almostEqual(easeOutBack(1.000000), 1, .0001);
  });
});
