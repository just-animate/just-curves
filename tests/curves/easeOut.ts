import { easeOut } from '../../src/curves';
import { almostEqual } from '../assertions';

describe('easeOut()', () => {
  it('easeOut(0) is about 0', () => {
    almostEqual(easeOut(0), 0, .0001);
  });
  it('easeOut(.250000) is about .378146', () => {
    almostEqual(easeOut(.250000), .378146, .0001);
  });
  it('easeOut(.333333) is about .488351', () => {
    almostEqual(easeOut(.333333), .488351, .0001);
  });
  it('easeOut(.500000) is about .684645', () => {
    almostEqual(easeOut(.500000), .684645, .0001);
  });
  it('easeOut(.666667) is about .843836', () => {
    almostEqual(easeOut(.666667), .843836, .0001);
  });
  it('easeOut(.750000) is about .906540', () => {
    almostEqual(easeOut(.750000), .906540, .0001);
  });
  it('easeOut(1) is about 1', () => {
    almostEqual(easeOut(1), 1, .0001);
  });
});
