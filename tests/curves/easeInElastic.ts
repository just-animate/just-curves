import { easeInElastic } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInElastic()', () => {
  it('easeInElastic(.000000) is about 0', () => {
    almostEqual(easeInElastic(.000000), 0, .0001);
  });
  it('easeInElastic(.250000) is about .0039062499999999952', () => {
    almostEqual(easeInElastic(.250000), .0039062499999999952, .0001);
  });
  it('easeInElastic(.333333) is about -.004921566601151843', () => {
    almostEqual(easeInElastic(.333333), -.004921566601151843, .0001);
  });
  it('easeInElastic(.500000) is about 1.1481063742006436e-17', () => {
    almostEqual(easeInElastic(.500000), 1.1481063742006436e-17, .0001);
  });
  it('easeInElastic(.666667) is about .049606282874006216', () => {
    almostEqual(easeInElastic(.666667), .049606282874006216, .0001);
  });
  it('easeInElastic(.750000) is about -.12500000000000003', () => {
    almostEqual(easeInElastic(.750000), -.12500000000000003, .0001);
  });
  it('easeInElastic(1.000000) is about 1', () => {
    almostEqual(easeInElastic(1.000000), 1, .0001);
  });
});

