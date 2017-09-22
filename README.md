# Just Curves

*Just Curves is a math library for animation and tweening!*

[![npm version](https://badge.fury.io/js/just-curves.svg)](https://badge.fury.io/js/just-curves)
[![Build Status](https://travis-ci.org/just-animate/just-curves.svg?branch=master)](https://travis-ci.org/just-animate/just-curves)
[![Downloads](https://img.shields.io/npm/dm/just-curves.svg)](https://www.npmjs.com/package/just-curves)

## Why use Just Curves?

- Common easing curves like easeIn, easeOut, easeInQuint for JS and CSS
- Custom eases using cubicBezier(), steps(), and cssFunction()
- Use CSS easing functions from existing code
- Small download size: __< 5k minified__  with no dependencies
- Works with Popmotion, AnimeJS, MoJS, and other animation engines that accept easings in form of ```(offset: number) => number```

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

### CSS Function
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

### Cubic Bezier
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

### Steps
Creates a curve that advances in steps

> Follows [step](https://drafts.csswg.org/css-timing/#step-timing-functions) CSS timing spec

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
The chart below shows all of the easings ready for use in JavaScript as is except for `linear`.


Type | In | Out | In-Out
--- | --- | --- | ---
`back` | easeInBack | easeOutBack | easeInOutBack
`bounce` | easeInBounce | easeOutBounce | easeInOutBounce
`circ` | easeInCirc | easeOutCirc | easeInOutCirc
`cubic` | easeInCubic | easeOutCubic | easeInOutCubic
`elastic` | easeInElastic | easeOutElastic | easeInOutElastic
`expo` | easeInExpo | easeOutExpo | easeInOutExpo
`quad` | easeInQuad | easeOutQuad | easeInOutQuad
`quart` | easeInQuart | easeOutQuart | easeInOutQuart
`quint` | easeInQuint | easeOutQuint | easeInOutQuint
`sine` | easeInSine | easeOutSine | easeInOutSine
`step` | stepStart | stepEnd |


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

The chart below shows all of the easings ready for use in CSS as is except for `linear`.

Type | In | Out | In-Out
--- | --- | --- | ---
`back` | easeInBack | easeOutBack | easeInOutBack
`bounce` | easeInBounce | easeOutBounce | easeInOutBounce
`circ` | easeInCirc | easeOutCirc | easeInOutCirc
`cubic` | easeInCubic | easeOutCubic | easeInOutCubic
`ease` | easeIn | easeOut | easeInOut
`expo` | easeInExpo | easeOutExpo | easeInOutExpo
`quad` | easeInQuad | easeOutQuad | easeInOutQuad
`quart` | easeInQuart | easeOutQuart | easeInOutQuart
`quint` | easeInQuint | easeOutQuint | easeInOutQuint
`sine` | easeInSine | easeOutSine | easeInOutSine
`special` | | | elegantSlowStartEnd
`step` | stepStart | stepEnd |

