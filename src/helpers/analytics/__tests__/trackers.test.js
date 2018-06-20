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
      simpleTracker('smartFAQ', {});
      //$FlowExpectedError: mock property not present in module
      expect(emptyCuckoo.infinario.mock.calls).toHaveLength(1);
    });
    it('existing window.infinario should use window.infinario', () => {
      const infinario = {
        track: jest.fn(),
      };
      window.infinario = infinario;
      simpleTracker('smartFAQ', {});
      simpleTracker('smartFAQ', {});
      expect(infinario.track.mock.calls).toHaveLength(2);
      //$FlowExpectedError: mock property not present in module
      expect(emptyCuckoo.infinario.mock.calls).toHaveLength(0);
    });
  });
});
