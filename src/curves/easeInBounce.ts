import { easeOutBounce } from './easeOutBounce';

export const easeInBounce = (x: number): number => 1 - easeOutBounce(1 - x);
