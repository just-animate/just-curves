import { easeOutElastic } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeOutElastic()', () => {
  it('easeOutElastic(.000000) is about 0', () => {
    almostEqual(easeOutElastic(.000000), 0, .0001);
  });
  it('easeOutElastic(.250000) is about 1.125', () => {
    almostEqual(easeOutElastic(.250000), 1.125, .0001);
  });
  it('easeOutElastic(.333333) is about .9503937171259939', () => {
    almostEqual(easeOutElastic(.333333), .9503937171259939, .0001);
  });
  it('easeOutElastic(.500000) is about 1', () => {
    almostEqual(easeOutElastic(.500000), 1, .0001);
  });
  it('easeOutElastic(.666667) is about 1.004921566601152', () => {
    almostEqual(easeOutElastic(.666667), 1.004921566601152, .0001);
  });
  it('easeOutElastic(.750000) is about .99609375', () => {
    almostEqual(easeOutElastic(.750000), .99609375, .0001);
  });
  it('easeOutElastic(1.000000) is about 1', () => {
    almostEqual(easeOutElastic(1.000000), 1, .0001);
  });
});
