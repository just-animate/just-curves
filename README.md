# Just Curves

*Just Curves is a math library for animation and tweening!*

[![npm version](https://badge.fury.io/js/just-curves.svg)](https://badge.fury.io/js/just-curves)
[![Build Status](https://travis-ci.org/just-animate/just-curves.svg?branch=master)](https://travis-ci.org/just-animate/just-curves)
[![Downloads](https://img.shields.io/npm/dm/just-curves.svg)](https://www.npmjs.com/package/just-curves)

## Why use Just Curves?

- Common easing curves like easeIn, easeOut, easeInQuint for JS and CSS
- Custom eases using cubicBezier(), steps(), and cssFunction()
- Use CSS easing functions from existing code
- Small download size: __< 6k minified__  with no dependencies
- Works with JustTween, AnimeJS, MoJS, and other animation engines that accept easings in form of ```(offset: number) => number```

> Power this project up with 🌟s,  [^ star it please](https://github.com/just-animate/just-curves/stargazers).

## Getting Started

### Setup from CDN
Include this script
```html
<script src="https://unpkg.com/just-curves/dist/just-curves.min.js"></script>
```

### Setup for bundling

```bash
npm install just-curves --save
```

## Curve creators

### cssFunction (easingString) => Curve
Creates a curve from a css easing function

**Browser**
```ts
const linear = just.curves.cssFunction('linear');
const ease = just.curves.cssFunction('cubic-bezier(0.25, 0.1, 0.25 0.1)');
```

**Bundled**
```ts
import { cssFunction } from 'just-curves';

const linear = cssFunction('linear');
const ease = cssFunction('cubic-bezier(0.25, 0.1, 0.25 0.1)');
```

### cubicBezier (p1, p2, p3, p4) => Curve
Creates a cubic-bezier curve using 4 numbers

> Follows [cubic-bezier](https://drafts.csswg.org/css-timing/#cubic-bezier-timing-functions) CSS spec

**Browser**
```ts
const ease = just.curves.cubicBezier(.25, .1, .25, 1);
```

**Bundled**
```ts
import { cubicBezier } from 'just-curves';

const ease = cubicBezier(.25, .1, .25, 1);
```

### steps (count, stop) => Curve
Creates a curve that evenly steps between frames

> Follows [step-timing](https://drafts.csswg.org/css-timing/#step-timing-functions) CSS spec

**Browser**
```ts
const stepStart = just.curves.steps(1, 'start');
const stepEnd   = just.curves.steps(1, 'end');
```

**Bundled**
```ts
import { steps } from 'just-curves';

const stepStart = steps(1, 'start');
const stepEnd   = steps(1, 'end');
```

## Curves made for JavaScript

**Browser**
```ts
just.curves./* curve name here */
```

**Bundled**
```ts
import { /* curve name here */ } from 'just-curves';
```

- easeInBack
- easeInBounce
- easeInCirc
- easeInCubic
- easeInElastic
- easeInExpo
- easeInOutBack
- easeInOutBounce
- easeInOutCirc
- easeInOutCubic
- easeInOutElastic
- easeInOutExpo
- easeInOutQuad
- easeInOutQuart
- easeInOutQuint
- easeInOutSine
- easeInQuad
- easeInQuart
- easeInQuint
- easeInSine
- easeOutBack
- easeOutBounce
- easeOutCirc
- easeOutCubic
- easeOutElastic
- easeOutExpo
- easeOutQuad
- easeOutQuart
- easeOutQuint
- easeOutSine
- linear
- stepEnd
- stepStart

## Curves made for in CSS

**Browser**
```ts
const curve = just.curves.css./* curve name here */;
```

**Bundled**
```ts
import { css } from 'just-curves';

const curve = css./* curve name here */;
```

- ease
- easeIn
- easeInBack
- easeInCirc
- easeInCubic
- easeInExpo
- easeInOut
- easeInOutBack
- easeInOutCirc
- easeInOutCubic
- easeInOutExpo
- easeInOutQuad
- easeInOutQuart
- easeInOutQuint
- easeInOutSine
- easeInQuad
- easeInQuart
- easeInQuint
- easeInSine
- easeOut
- easeOutBack
- easeOutCirc
- easeOutCubic
- easeOutExpo
- easeOutQuad
- easeOutQuart
- easeOutQuint
- easeOutSine
- elegantSlowStartEnd
- linear
- stepEnd
- stepStart
