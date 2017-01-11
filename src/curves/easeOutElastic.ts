import { pow, sin, c4 } from '../internal';


export const easeOutElastic = (x: number): number => x === 0
  ? 0 : x === 1
    ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
