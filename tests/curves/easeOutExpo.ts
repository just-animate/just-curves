import { easeOutExpo } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeOutExpo()', () => {
  it('easeOutExpo(.000000) is about 0', () => {
    almostEqual(easeOutExpo(.000000), 0, .0001);
  });
  it('easeOutExpo(.250000) is about .8232233047033631', () => {
    almostEqual(easeOutExpo(.250000), .8232233047033631, .0001);
  });
  it('easeOutExpo(.333333) is about .9007874342519875', () => {
    almostEqual(easeOutExpo(.333333), .9007874342519875, .0001);
  });
  it('easeOutExpo(.500000) is about .96875', () => {
    almostEqual(easeOutExpo(.500000), .96875, .0001);
  });
  it('easeOutExpo(.666667) is about .9901568667976963', () => {
    almostEqual(easeOutExpo(.666667), .9901568667976963, .0001);
  });
  it('easeOutExpo(.750000) is about .99447572827198', () => {
    almostEqual(easeOutExpo(.750000), .99447572827198, .0001);
  });
  it('easeOutExpo(1.000000) is about 1', () => {
    almostEqual(easeOutExpo(1.000000), 1, .0001);
  });
});

