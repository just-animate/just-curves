import { easeInOutCirc } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInOutCirc()', () => {
  it('easeInOutCirc(.000000) is about 0', () => {
    almostEqual(easeInOutCirc(.000000), 0, .0001);
  });
  it('easeInOutCirc(.250000) is about .0669872981077807', () => {
    almostEqual(easeInOutCirc(.250000), .0669872981077807, .0001);
  });
  it('easeInOutCirc(.333333) is about .12732200375003505', () => {
    almostEqual(easeInOutCirc(.333333), .12732200375003505, .0001);
  });
  it('easeInOutCirc(.500000) is about .5', () => {
    almostEqual(easeInOutCirc(.500000), .5, .0001);
  });
  it('easeInOutCirc(.666667) is about .8726779962499649', () => {
    almostEqual(easeInOutCirc(.666667), .8726779962499649, .0001);
  });
  it('easeInOutCirc(.750000) is about .9330127018922193', () => {
    almostEqual(easeInOutCirc(.750000), .9330127018922193, .0001);
  });
  it('easeInOutCirc(1.000000) is about 1', () => {
    almostEqual(easeInOutCirc(1.000000), 1, .0001);
  });
});
