import { easeInOutQuad } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInOutQuad()', () => {
  it('easeInOutQuad(.000000) is about 0', () => {
    almostEqual(easeInOutQuad(.000000), 0, .0001);
  });
  it('easeInOutQuad(.250000) is about .125', () => {
    almostEqual(easeInOutQuad(.250000), .125, .0001);
  });
  it('easeInOutQuad(.333333) is about .2222222222222222', () => {
    almostEqual(easeInOutQuad(.333333), .2222222222222222, .0001);
  });
  it('easeInOutQuad(.500000) is about .5', () => {
    almostEqual(easeInOutQuad(.500000), .5, .0001);
  });
  it('easeInOutQuad(.666667) is about .7777777777777777', () => {
    almostEqual(easeInOutQuad(.666667), .7777777777777777, .0001);
  });
  it('easeInOutQuad(.750000) is about .875', () => {
    almostEqual(easeInOutQuad(.750000), .875, .0001);
  });
  it('easeInOutQuad(1.000000) is about 1', () => {
    almostEqual(easeInOutQuad(1.000000), 1, .0001);
  });
});
