import { almostEqual } from '../assertions';
import { easeIn } from '../../src/curves';

describe('easeIn()', () => {
  it('easeIn(.000000) is about 0', () => {
    almostEqual(easeIn(.000000), 0, .0001);
  });
  it('easeIn(.250000) is about .09346465071882487', () => {
    almostEqual(easeIn(.250000), .09346465071882487, .0001);
  });
  it('easeIn(.333333) is about .15616392099284343', () => {
    almostEqual(easeIn(.333333), .15616392099284343, .0001);
  });
  it('easeIn(.500000) is about .31535681257253934', () => {
    almostEqual(easeIn(.500000), .31535681257253934, .0001);
  });
  it('easeIn(.666667) is about .5116509972898244', () => {
    almostEqual(easeIn(.666667), .5116509972898244, .0001);
  });
  it('easeIn(.750000) is about .6218618691748903', () => {
    almostEqual(easeIn(.750000), .6218618691748903, .0001);
  });
  it('easeIn(1.000000) is about 1', () => {
    almostEqual(easeIn(1.000000), 1, .0001);
  });
});
