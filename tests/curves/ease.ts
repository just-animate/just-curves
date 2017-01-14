import { ease } from '../../src/curves';
import { almostEqual } from '../assertions';


describe('ease()', () => {
  it('ease(0) is about 0', () => {
    almostEqual(ease(0), 0, .0001);
  });
  it('ease(.250000) is about .141187', () => {
    almostEqual(ease(.250000), .141187, .0001);
  });
  it('ease(.333333) is about .221164', () => {
    almostEqual(ease(.333333), .221164, .0001);
  });
  it('ease(.500000) is about .405419', () => {
    almostEqual(ease(.500000), .405419, .0001);
  });
  it('ease(.666667) is about .601111', () => {
    almostEqual(ease(.666667), .601111, .0001);
  });
  it('ease(.750000) is about .700398', () => {
    almostEqual(ease(.750000), .700398, .0001);
  });
  it('ease(1) is about 1', () => {
    almostEqual(ease(1), 1, .0001);
  });
});
