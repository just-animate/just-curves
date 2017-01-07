const cos = Math.cos;
const PI = Math.PI;
const tau = 2 * PI;
const pow = Math.pow;
const sin = Math.sin;
const sqrt = Math.sqrt;

const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = tau / 3;
const c5 = tau / 4.5;

// used by easeOutBounce
const n1 = 7.5625;
const d1 = 2.75;

export const linear = (x: number): number => x;

export const easeOutBounce = (x: number): number =>  x < 1 / d1
    ? n1 * x * x
    : x < 2 / d1
      ? n1 * (x -= (1.5 / d1)) * x + .75
      : x < 2.5 / d1
        ? n1 * (x -= (2.25 / d1)) * x + .9375
        : n1 * (x -= (2.625 / d1)) * x + .984375;

export const easeInQuad = (x: number): number => x * x;

export const easeOutQuad = (x: number): number =>  1 - (1 - x) * (1 - x);

export const easeInOutQuad = (x: number): number => x < 0.5 ?
    2 * x * x :
    1 - pow(-2 * x + 2, 2) / 2;

export const easeInCubic = (x: number): number =>  x * x * x;

export const easeOutCubic = (x: number): number => 1 - pow(1 - x, 3);

export const easeInOutCubic = (x: number): number => x < 0.5
    ? 4 * x * x * x
    : 1 - pow(-2 * x + 2, 3) / 2;

export const easeInQuart = (x: number): number => x * x * x * x;

export const easeOutQuart = (x: number): number =>  1 - pow(1 - x, 4);

export const easeInOutQuart = (x: number): number => x < 0.5
  ? 8 * x * x * x * x
  : 1 - pow(-2 * x + 2, 4) / 2;

export const easeInQuint = (x: number): number =>  x * x * x * x * x;

export const easeOutQuint = (x: number): number => 1 - pow(1 - x, 5);

export const easeInOutQuint = (x: number): number => x < 0.5
  ? 16 * x * x * x * x * x
  : 1 - pow(-2 * x + 2, 5) / 2;

export const easeInSine = (x: number): number => 1 - cos(x * PI / 2);

export const easeOutSine = (x: number): number => sin(x * PI / 2);

export const easeInOutSine = (x: number): number => -(cos(PI * x) - 1) / 2;

export const easeInExpo = (x: number): number => x === 0 ? 0 : pow(2, 10 * x - 10);

export const easeOutExpo = (x: number): number => x === 1 ? 1 : 1 - pow(2, -10 * x);

export const easeInOutExpo = (x: number): number => x === 0
  ? 0 : x === 1
    ? 1 : x < 0.5
      ? pow(2, 20 * x - 10) / 2
      : (2 - pow(2, -20 * x + 10)) / 2;

export const easeInCirc = (x: number): number => 1 - sqrt(1 - (x * x));

export const easeOutCirc = (x: number): number => sqrt(1 - ((x - 1) * (x - 1)));

export const easeInOutCirc = (x: number): number => x < 0.5
    ? (1 - sqrt(1 - pow(2 * x, 2))) / 2
  : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;

export const easeInElastic = (x: number): number => x === 0
    ? 0 : x === 1
    ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);

export const easeOutElastic = (x: number): number => x === 0
    ? 0 : x === 1
      ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;

export const easeInOutElastic = (x: number): number => x === 0
    ? 0 : x === 1
      ? 1 : x < 0.5
        ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
        : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;

export const easeInBack = (x: number): number =>  c3 * x * x * x - c1 * x * x;

export const easeOutBack = (x: number): number =>  1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);

export const easeInOutBack = (x: number): number => x < 0.5
    ? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
    : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;

export const easeInBounce = (x: number): number => 1 - easeOutBounce(1 - x);

export const easeInOutBounce = (x: number): number => x < 0.5
    ? (1 - easeOutBounce(1 - 2 * x)) / 2
    : (1 + easeOutBounce(2 * x - 1)) / 2;
