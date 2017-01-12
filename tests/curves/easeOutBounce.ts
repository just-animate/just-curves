import { easeOutBounce } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeOutBounce()', () => {
  it('easeOutBounce(.000000) is about 0', () => {
    almostEqual(easeOutBounce(.000000), 0, .0001);
  });
  it('easeOutBounce(.250000) is about .47265625', () => {
    almostEqual(easeOutBounce(.250000), .47265625, .0001);
  });
  it('easeOutBounce(.333333) is about .8402777777777777', () => {
    almostEqual(easeOutBounce(.333333), .8402777777777777, .0001);
  });
  it('easeOutBounce(.500000) is about .765625', () => {
    almostEqual(easeOutBounce(.500000), .765625, .0001);
  });
  it('easeOutBounce(.666667) is about .8611111111111112', () => {
    almostEqual(easeOutBounce(.666667), .8611111111111112, .0001);
  });
  it('easeOutBounce(.750000) is about .97265625', () => {
    almostEqual(easeOutBounce(.750000), .97265625, .0001);
  });
  it('easeOutBounce(1.000000) is about 1', () => {
    almostEqual(easeOutBounce(1.000000), 1, .0001);
  });
});
