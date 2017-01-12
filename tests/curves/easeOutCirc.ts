import { easeOutCirc } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeOutCirc()', () => {
  it('easeOutCirc(.000000) is about 0', () => {
    almostEqual(easeOutCirc(.000000), 0, .0001);
  });
  it('easeOutCirc(.250000) is about .6614378277661477', () => {
    almostEqual(easeOutCirc(.250000), .6614378277661477, .0001);
  });
  it('easeOutCirc(.333333) is about .7453559924999298', () => {
    almostEqual(easeOutCirc(.333333), .7453559924999298, .0001);
  });
  it('easeOutCirc(.500000) is about .8660254037844386', () => {
    almostEqual(easeOutCirc(.500000), .8660254037844386, .0001);
  });
  it('easeOutCirc(.666667) is about .9428090415820634', () => {
    almostEqual(easeOutCirc(.666667), .9428090415820634, .0001);
  });
  it('easeOutCirc(.750000) is about .9682458365518543', () => {
    almostEqual(easeOutCirc(.750000), .9682458365518543, .0001);
  });
  it('easeOutCirc(1.000000) is about 1', () => {
    almostEqual(easeOutCirc(1.000000), 1, .0001);
  });
});
