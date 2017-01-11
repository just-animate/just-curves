import { pow, sin, c5 } from '../internal';

export const easeInOutElastic = (x: number): number => x === 0
  ? 0 : x === 1
    ? 1 : x < 0.5
      ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
      : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
