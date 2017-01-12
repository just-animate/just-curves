import { easeInSine } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeInSine()', () => {
  it('easeInSine(.000000) is about 0', () => {
    almostEqual(easeInSine(.000000), 0, .0001);
  });
  it('easeInSine(.250000) is about .07612046748871326', () => {
    almostEqual(easeInSine(.250000), .07612046748871326, .0001);
  });
  it('easeInSine(.333333) is about .1339745962155613', () => {
    almostEqual(easeInSine(.333333), .1339745962155613, .0001);
  });
  it('easeInSine(.500000) is about .2928932188134524', () => {
    almostEqual(easeInSine(.500000), .2928932188134524, .0001);
  });
  it('easeInSine(.666667) is about .4999999999999999', () => {
    almostEqual(easeInSine(.666667), .4999999999999999, .0001);
  });
  it('easeInSine(.750000) is about .6173165676349102', () => {
    almostEqual(easeInSine(.750000), .6173165676349102, .0001);
  });
  it('easeInSine(1.000000) is about .9999999999999999', () => {
    almostEqual(easeInSine(1.000000), .9999999999999999, .0001);
  });
});
