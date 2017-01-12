import { easeInExpo } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInExpo()', () => {
  it('easeInExpo(.000000) is about 0', () => {
    almostEqual(easeInExpo(.000000), 0, .0001);
  });
  it('easeInExpo(.250000) is about .005524271728019903', () => {
    almostEqual(easeInExpo(.250000), .005524271728019903, .0001);
  });
  it('easeInExpo(.333333) is about .009843133202303692', () => {
    almostEqual(easeInExpo(.333333), .009843133202303692, .0001);
  });
  it('easeInExpo(.500000) is about .03125', () => {
    almostEqual(easeInExpo(.500000), .03125, .0001);
  });
  it('easeInExpo(.666667) is about .09921256574801245', () => {
    almostEqual(easeInExpo(.666667), .09921256574801245, .0001);
  });
  it('easeInExpo(.750000) is about .1767766952966369', () => {
    almostEqual(easeInExpo(.750000), .1767766952966369, .0001);
  });
  it('easeInExpo(1.000000) is about 1', () => {
    almostEqual(easeInExpo(1.000000), 1, .0001);
  });
});
