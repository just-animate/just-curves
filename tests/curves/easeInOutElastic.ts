import { easeInOutElastic } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInOutElastic()', () => {

  it('easeInOutElastic(.000000) is about 0', () => {
    almostEqual(easeInOutElastic(.000000), 0, .0001);
  });
  it('easeInOutElastic(.250000) is about 5.740531871003218e-18', () => {
    almostEqual(easeInOutElastic(.250000), 5.740531871003218e-18, .0001);
  });
  it('easeInOutElastic(.333333) is about .024803141437003108', () => {
    almostEqual(easeInOutElastic(.333333), .024803141437003108, .0001);
  });
  it('easeInOutElastic(.500000) is about .5', () => {
    almostEqual(easeInOutElastic(.500000), .5, .0001);
  });
  it('easeInOutElastic(.666667) is about .975196858562997', () => {
    almostEqual(easeInOutElastic(.666667), .975196858562997, .0001);
  });
  it('easeInOutElastic(.750000) is about 1', () => {
    almostEqual(easeInOutElastic(.750000), 1, .0001);
  });
  it('easeInOutElastic(1.000000) is about 1', () => {
    almostEqual(easeInOutElastic(1.000000), 1, .0001);
  });
});
