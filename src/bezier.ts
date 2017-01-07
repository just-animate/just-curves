const SUBDIVISION_EPSILON = 0.0001;

const abs = Math.abs;

function bezier(n1: number, n2: number, t: number): number {
    return 3 * n1 * (1 - t) * (1 - t) * t + 3 * n2 * (1 - t) * t * t + t * t * t;
}

export function cubicBezier(p0: number, p1: number, p2: number, p3: number): (x: number) => number {
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
}
