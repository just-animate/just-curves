import { easeInQuad } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInQuad()', () => {
  it('easeInQuad(.000000) is about 0', () => {
    almostEqual(easeInQuad(.000000), 0, .0001);
  });
  it('easeInQuad(.250000) is about .0625', () => {
    almostEqual(easeInQuad(.250000), .0625, .0001);
  });
  it('easeInQuad(.333333) is about .1111111111111111', () => {
    almostEqual(easeInQuad(.333333), .1111111111111111, .0001);
  });
  it('easeInQuad(.500000) is about .25', () => {
    almostEqual(easeInQuad(.500000), .25, .0001);
  });
  it('easeInQuad(.666667) is about .4444444444444444', () => {
    almostEqual(easeInQuad(.666667), .4444444444444444, .0001);
  });
  it('easeInQuad(.750000) is about .5625', () => {
    almostEqual(easeInQuad(.750000), .5625, .0001);
  });
  it('easeInQuad(1.000000) is about 1', () => {
    almostEqual(easeInQuad(1.000000), 1, .0001);
  });
});
