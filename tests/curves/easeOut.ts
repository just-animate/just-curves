import { easeOut } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeOut()', () => {
  it('easeOut(.000000) is about 0', () => {
    almostEqual(easeOut(.000000), 0, .0001);
  });
  it('easeOut(.250000) is about .37813813082510983', () => {
    almostEqual(easeOut(.250000), .37813813082510983, .0001);
  });
  it('easeOut(.333333) is about .48834900271017545', () => {
    almostEqual(easeOut(.333333), .48834900271017545, .0001);
  });
  it('easeOut(.500000) is about .6846431874274608', () => {
    almostEqual(easeOut(.500000), .6846431874274608, .0001);
  });
  it('easeOut(.666667) is about .8438360790071566', () => {
    almostEqual(easeOut(.666667), .8438360790071566, .0001);
  });
  it('easeOut(.750000) is about .9065353492811752', () => {
    almostEqual(easeOut(.750000), .9065353492811752, .0001);
  });
  it('easeOut(1.000000) is about 1', () => {
    almostEqual(easeOut(1.000000), 1, .0001);
  });
});
