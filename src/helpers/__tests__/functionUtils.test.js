// @flow

import { debounce } from '../functionUtils';

describe('functionUtils', () => {
  describe('debounce', () => {
    const fn = jest.fn();
    const time = 200;
    const debouncedFn = debounce(fn, time);

    beforeEach(() => {
      jest.resetAllMocks();
    });

    it('debounces when time smaller than timeout', () => {
      debouncedFn();
      debouncedFn();
      debouncedFn();
      expect(fn.mock.calls).toHaveLength(0);
    });
    it('debounces when time greater than timeout', done => {
      debouncedFn();
      setTimeout(() => {
        expect(fn.mock.calls).toHaveLength(1);
        done();
      }, time + 10);
    });
  });
});
