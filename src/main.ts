import {
  // EasingDeclaration,
  EasingFunction,
  // CssEasingDefinition,
  // CssEasingFunction
} from './types';

const abs = Math.abs;
const cos = Math.cos;
const pi = Math.PI;
const tau = 2 * pi;
const pow = Math.pow;
const sin = Math.sin;
const sqrt = Math.sqrt;

const SUBDIVISION_EPSILON = 0.0001;
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = tau / 3;
const c5 = tau / 4.5;

// const cb = 'cubic-bezier' as 'cubic-bezier';
// const st = 'step' as 'step';
// const camelCaseRegex = /([a-z])[- ]([a-z])/ig;
// const cssFunctionRegex = /([a-z-]+)\(([^\)]+)\)/ig;

// const easings: { [name: string]: CssEasingDefinition } = {
//   ease: [cb, .25, .1, .25, 1],
//   easeIn: [cb, .42, 0, 1, 1],
//   easeInBack: [cb, .6, -.28, .735, .045],
//   easeInCirc: [cb, .6, .04, .98, .335],
//   easeInCubic: [cb, .55, .055, .675, .19],
//   easeInExpo: [cb, .95, .05, .795, .035],
//   easeInOut: [cb, .42, 0, .58, 1],
//   easeInOutBack: [cb, .68, -.55, .265, 1.55],
//   easeInOutCirc: [cb, .785, .135, .15, .86],
//   easeInOutCubic: [cb, .645, .045, .355, 1],
//   easeInOutExpo: [cb, 1, 0, 0, 1],
//   easeInOutQuad: [cb, .455, .03, .515, .955],
//   easeInOutQuart: [cb, .77, 0, .175, 1],
//   easeInOutQuint: [cb, .86, 0, .07, 1],
//   easeInOutSine: [cb, .445, .05, .55, .95],
//   easeInQuad: [cb, .55, .085, .68, .53],
//   easeInQuart: [cb, .895, .03, .685, .22],
//   easeInQuint: [cb, .755, .05, .855, .06],
//   easeInSine: [cb, .47, 0, .745, .715],
//   easeOut: [cb, 0, 0, .58, 1],
//   easeOutBack: [cb, .175, .885, .32, 1.275],
//   easeOutCirc: [cb, .075, .82, .165, 1],
//   easeOutCubic: [cb, .215, .61, .355, 1],
//   easeOutExpo: [cb, .19, 1, .22, 1],
//   easeOutQuad: [cb, .25, .46, .45, .94],
//   easeOutQuart: [cb, .165, .84, .44, 1],
//   easeOutQuint: [cb, .23, 1, .32, 1],
//   easeOutSine: [cb, .39, .575, .565, 1],
//   elegantSlowStartEnd: [cb, .175, .885, .32, 1.275],
//   linear: [cb, 0, 0, 1, 1],
//   stepEnd: [st, 1, 'end'],
//   stepStart: [st, 1, 'start']
// };

// const cssDefToString = (arg: (string | number)[]): string => arg[0] + '(' + arg.slice(1).join(',') + ')';

// const camelCaseMatcher = (match: string, p1: string, p2: string) => p1 + p2.toUpperCase();

// const toCamelCase = (value: string | undefined): string => typeof value === 'string'
//   ? (value as string).replace(camelCaseRegex, camelCaseMatcher)
//   : '';

// const startsWith = (value: string, pattern: string) => value.indexOf(pattern) === 0;

// const ease = ({ name, native, css }: EasingDeclaration): CssEasingFunction => {
//   const output = (native as CssEasingFunction);
//   if (css && css.length) {
//     easings[name] = css;
//     output.cssString = cssDefToString(css);
//   }

//   return output as CssEasingFunction;
// };

const bezier = (n1: number, n2: number, t: number): number => 3 * n1 * (1 - t) * (1 - t) * t + 3 * n2 * (1 - t) * t * t + t * t * t;

export const cubicBezier = (p0: number, p1: number, p2: number, p3: number): EasingFunction => {
  if (p0 < 0 || p0 > 1 || p2 < 0 || p2 > 1) {
    return (x: number) => x;
  }

  return (x: number): number => {
    if (x === 0 || x === 1) {
      return x;
    }

    let start = 0;
    let end = 1;
    let limit = 19;

    do {
      const mid = (start + end) / 2;
      const xEst = bezier(p0, p2, mid);

      if (abs(x - xEst) < SUBDIVISION_EPSILON) {
        return bezier(p1, p3, mid);
      }
      if (xEst < x) {
        start = mid;
      } else {
        end = mid;
      }
    } while (--limit);

    // limit is reached
    return x;
  };
};


export const steps = (count: number, pos?: number | 'end' | 'start'): { (x: number): number } => {
  const q = count / 1;
  const p: number = pos === 'end'
    ? 0 : pos === 'start'
      ? 1 : pos || 0;
  return (x: number): number => x >= 1 ? 1 : (p * q + x) - (p * q + x) % q;
};

// const getEasingString = (easingString: string): string => {
//   // if no function supplied return linear as cubic
//   if (easingString) {
//     // if starts with known css function, return with no parsing
//     if (startsWith(easingString, cb) || startsWith(easingString, st)) {
//       return easingString;
//     }
//     // get name as camel case
//     const def = easings[toCamelCase(easingString)];
//     if (def) {
//       return cssDefToString(def);
//     }
//   }
//   throw new Error('could not parse easing function');
// };

// const findEasingDefinition = (easingString: string) => {
//   // search for a compatible known easing
//   const def: CssEasingDefinition = easings[toCamelCase(easingString)];
//   if (def) {
//     return def;
//   }
//   const matches = cssFunctionRegex.exec(easingString);
//   if (matches && matches.length) {
//     return [matches[1]].concat(matches[2].split(',')) as CssEasingDefinition;
//   }
//   throw new Error('could not parse easing function');
// };

// const parseCSSFunction = (easingString: string): EasingFunction => {
//   const parts = findEasingDefinition(easingString);
//   const fnName = parts[0];
//   if (fnName === 'step') {
//     return steps(parts[1], parts[2]);
//   }
//   if (fnName === 'cubic-bezier') {
//     return cubicBezier(
//       parts[1],
//       parts[2] as number,
//       parts[3] as number,
//       parts[4] as number
//     );
//   }
//   throw new Error('could not parse css function');
// };

const easeOutBounce = (x: number): number => {
  const n1 = 7.5625;
  const d1 = 2.75;
  return x < 1 / d1
    ? n1 * x * x
    : x < 2 / d1
      ? n1 * (x -= (1.5 / d1)) * x + .75
      : x < 2.5 / d1
        ? n1 * (x -= (2.25 / d1)) * x + .9375
        : n1 * (x -= (2.625 / d1)) * x + .984375;
};


export const stepStart = steps(1, 1);
export const stepEnd = steps(1, 0);

/**
 * Animations change at a constant speed
 */
export const linear = (x: number): number => x;

// export const ease = linear;
// export const easeIn = linear;
// export const easeInOut = linear;
// export const easeOut = linear;

// ease in functions
export const easeInBack = (x: number): number => c3 * x * x * x - c1 * x * x;
export const easeInBounce = (x: number): number => 1 - easeOutBounce(1 - x);
export const easeInCirc = (x: number): number => 1 - sqrt(1 - (x * x));
export const easeInCubic = (x: number): number => x * x * x;
export const easeInElastic = (x: number): number => x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
export const easeInExpo = (x: number): number => x === 0 ? 0 : pow(2, 10 * x - 10);
export const easeInQuart = (x: number): number => x * x * x * x;
export const easeInQuad = (x: number): number => x * x;
export const easeInQuint = (x: number): number => x * x * x * x * x;
export const easeInSine = (x: number): number => 1 - cos(x * pi / 2);


// ease inout functions
export const easeInOutBack = (x: number): number => x < 0.5
  ? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
  : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;

export const easeInOutBounce = (x: number): number => x < 0.5
  ? (1 - easeOutBounce(1 - 2 * x)) / 2
  : (1 + easeOutBounce(2 * x - 1)) / 2;

export const easeInOutCirc = (x: number): number => x < 0.5
  ? (1 - sqrt(1 - pow(2 * x, 2))) / 2
  : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;

export const easeInOutCubic = (x: number): number => x < 0.5
  ? 4 * x * x * x
  : 1 - pow(-2 * x + 2, 3) / 2;

export const easeInOutElastic = (x: number): number => x === 0
  ? 0 : x === 1
    ? 1 : x < 0.5
      ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
      : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;

export const easeInOutExpo = (x: number): number => x === 0
  ? 0 : x === 1
    ? 1 : x < 0.5
      ? pow(2, 20 * x - 10) / 2
      : (2 - pow(2, -20 * x + 10)) / 2;

export const easeInOutQuad = (x: number): number => x < 0.5 ?
  2 * x * x :
  1 - pow(-2 * x + 2, 2) / 2;

export const easeInOutQuart = (x: number): number => x < 0.5
  ? 8 * x * x * x * x
  : 1 - pow(-2 * x + 2, 4) / 2;

export const easeInOutQuint = (x: number): number => x < 0.5
  ? 16 * x * x * x * x * x
  : 1 - pow(-2 * x + 2, 5) / 2;

export const easeInOutSine = (x: number): number => -(cos(pi * x) - 1) / 2;

// ease out functions
export const easeOutBack = (x: number): number => 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
export { easeOutBounce };
export const easeOutCirc = (x: number): number => sqrt(1 - ((x - 1) * (x - 1)));
export const easeOutCubic = (x: number): number => 1 - pow(1 - x, 3);

export const easeOutElastic = (x: number): number => x === 0
  ? 0 : x === 1
    ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;

export const easeOutExpo = (x: number): number => x === 1 ? 1 : 1 - pow(2, -10 * x);
export const easeOutQuad = (x: number): number => 1 - (1 - x) * (1 - x);
export const easeOutQuart = (x: number): number => 1 - pow(1 - x, 4);
export const easeOutQuint = (x: number): number => 1 - pow(1 - x, 5);
export const easeOutSine = (x: number): number => sin(x * pi / 2);
