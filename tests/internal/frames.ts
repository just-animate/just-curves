import { frames } from '../../src/internal';
import * as assert from 'assert';

describe('frames()', () => {
    describe('frames(2)', () => {
        it('frames(2)(0) is 0', () => {
            assert.equal(frames(2)(0), 0);
        });
        it('frames(2)(.4) is 0', () => {
            assert.equal(frames(2)(.4), 0);
        });
        it('frames(2)(.5) is 1', () => {
            assert.equal(frames(2)(.5), 1);
        });
        it('frames(2)(1) is 1', () => {
            assert.equal(frames(2)(1), 1);
        });
    });
    describe('frames(3)', () => {
        it('frames(3)(0) is 0', () => {
            assert.equal(frames(3)(0), 0);
        });
        it('frames(3)(.3) is 0', () => {
            assert.equal(frames(3)(.3), 0);
        });
        it('frames(3)(1/3) is .5', () => {
            assert.equal(frames(3)(.4), .5);
        });
        it('frames(3)(.6) is .5', () => {
            assert.equal(frames(3)(.6), .5);
        });
        it('frames(3)(2/3) is almost 2/3', () => {
            assert.equal(frames(3)(2 / 3), 1);
        });
        it('frames(3)(.8) is almost 2/3', () => {
            assert.equal(frames(3)(.8), 1);
        });
        it('frames(3)(1) is 1', () => {
            assert.equal(frames(3)(1), 1);
        });
    });
});
