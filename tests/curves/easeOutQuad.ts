import { easeOutQuad } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeOutQuad()', () => {
  it('easeOutQuad(.000000) is about 0', () => {
    almostEqual(easeOutQuad(.000000), 0, .0001);
  });
  it('easeOutQuad(.250000) is about .4375', () => {
    almostEqual(easeOutQuad(.250000), .4375, .0001);
  });
  it('easeOutQuad(.333333) is about .5555555555555556', () => {
    almostEqual(easeOutQuad(.333333), .5555555555555556, .0001);
  });
  it('easeOutQuad(.500000) is about .75', () => {
    almostEqual(easeOutQuad(.500000), .75, .0001);
  });
  it('easeOutQuad(.666667) is about .888888888888889', () => {
    almostEqual(easeOutQuad(.666667), .888888888888889, .0001);
  });
  it('easeOutQuad(.750000) is about .9375', () => {
    almostEqual(easeOutQuad(.750000), .9375, .0001);
  });
  it('easeOutQuad(1.000000) is about 1', () => {
    almostEqual(easeOutQuad(1.000000), 1, .0001);
  });
});
