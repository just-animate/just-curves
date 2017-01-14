import { linear } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('linear()', () => {
  it('linear(.000000) is about 0', () => {
    almostEqual(linear(0), 0, .0001);
  });
  it('linear(.250000) is about .25', () => {
    almostEqual(linear(.25), .25, .0001);
  });
  it('linear(.333333) is about .3333333333333333', () => {
    almostEqual(linear(.3333), .3333, .0001);
  });
  it('linear(.500000) is about .5', () => {
    almostEqual(linear(.5), .5, .0001);
  });
  it('linear(.666667) is about .6666666666666666', () => {
    almostEqual(linear(.666667), .666667, .0001);
  });
  it('linear(.750000) is about .75', () => {
    almostEqual(linear(.75), .75, .0001);
  });
  it('linear(1.000000) is about 1', () => {
    almostEqual(linear(1), 1, .0001);
  });
});
