import { easeInCubic } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInCubic()', () => {
  it('easeInCubic(.000000) is about 0', () => {
    almostEqual(easeInCubic(.000000), 0, .0001);
  });
  it('easeInCubic(.250000) is about .015625', () => {
    almostEqual(easeInCubic(.250000), .015625, .0001);
  });
  it('easeInCubic(.333333) is about .037037037037037035', () => {
    almostEqual(easeInCubic(.333333), .037037037037037035, .0001);
  });
  it('easeInCubic(.500000) is about .125', () => {
    almostEqual(easeInCubic(.500000), .125, .0001);
  });
  it('easeInCubic(.666667) is about .2962962962962963', () => {
    almostEqual(easeInCubic(.666667), .2962962962962963, .0001);
  });
  it('easeInCubic(.750000) is about .421875', () => {
    almostEqual(easeInCubic(.750000), .421875, .0001);
  });
  it('easeInCubic(1.000000) is about 1', () => {
    almostEqual(easeInCubic(1.000000), 1, .0001);
  });
});
