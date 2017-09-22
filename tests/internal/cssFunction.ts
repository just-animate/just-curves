import { cssFunction } from '../../src/internal';
import * as assert from 'assert';

describe('cssFunction', () => {
    describe('steps(1, start)', () => {
        it('0 is 1', () => {
            const stepStart = cssFunction('steps(1,start)');
            assert.equal(stepStart(0), 1);
        });
        it('.5 is 1', () => {
            const stepStart = cssFunction('steps(1,start)');
            assert.equal(stepStart(.5), 1);
        });
        it('1 is 1', () => {
            const stepStart = cssFunction('steps(1,start)');
            assert.equal(stepStart(1), 1);
        });
    });

    describe('steps(1, end)', () => {
        it('0 is 0', () => {
            const stepEnd = cssFunction('steps(1,end)');
            assert.equal(stepEnd(0), 0);
        });
        it('.5 is 0', () => {
            const stepEnd = cssFunction('steps(1,end)');
            assert.equal(stepEnd(.5), 0);
        });
        it('1 is 1', () => {
            const stepEnd = cssFunction('steps(1,end)');
            assert.equal(stepEnd(1), 1);
        });
    });
});
