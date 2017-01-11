import { pow, sin, c4 } from '../internal';

export const easeInElastic = (x: number): number => x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
