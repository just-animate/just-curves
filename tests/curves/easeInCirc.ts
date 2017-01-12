import { easeInCirc } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInCirc()', () => {
  it('easeInCirc(.000000) is about 0', () => {
    almostEqual(easeInCirc(.000000), 0, .0001);
  });
  it('easeInCirc(.250000) is about .031754163448145745', () => {
    almostEqual(easeInCirc(.250000), .031754163448145745, .0001);
  });
  it('easeInCirc(.333333) is about .057190958417936644', () => {
    almostEqual(easeInCirc(.333333), .057190958417936644, .0001);
  });
  it('easeInCirc(.500000) is about .1339745962155614', () => {
    almostEqual(easeInCirc(.500000), .1339745962155614, .0001);
  });
  it('easeInCirc(.666667) is about .2546440075000701', () => {
    almostEqual(easeInCirc(.666667), .2546440075000701, .0001);
  });
  it('easeInCirc(.750000) is about .3385621722338523', () => {
    almostEqual(easeInCirc(.750000), .3385621722338523, .0001);
  });
  it('easeInCirc(1.000000) is about 1', () => {
    almostEqual(easeInCirc(1.000000), 1, .0001);
  });
});
