// @flow

import { simpleTracker } from '../trackers';
import emptyCuckoo from '../cuckoo';

jest.mock('../cuckoo');

describe('Trackers', () => {
  describe('simpleTracker', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
    it('no window.cuckoo should use emptyCuckoo', () => {
      simpleTracker('smartFAQ', {})();
      //$FlowExpectedError: mock property not present in module
      expect(emptyCuckoo.infinario.mock.calls).toHaveLength(1);
    });
    it('existing window.cuckoo should use window.cuckoo', () => {
      const cuckoo = {
        infinario: jest.fn(),
      };
      window.cuckoo = cuckoo;
      simpleTracker('smartFAQ', {})();
      simpleTracker('smartFAQ', {})();
      expect(cuckoo.infinario.mock.calls).toHaveLength(2);
      //$FlowExpectedError: mock property not present in module
      expect(emptyCuckoo.infinario.mock.calls).toHaveLength(0);
    });
  });
});
