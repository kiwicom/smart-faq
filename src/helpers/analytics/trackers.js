//  @flow

import emptyCuckoo from './cuckoo';
import type { LogEvent, EventPayload } from './cuckoo';
import TimeTracker from './TimeTracker';
import EnterTracker from './EnterTracker';

const exponeaTracker = (eventName: LogEvent, payload?: EventPayload) => {
  typeof window !== 'undefined' && window.infinario
    ? window.infinario.track(eventName, payload || {})
    : emptyCuckoo.infinario(eventName, payload || {});
};
const simpleTracker = (eventName: LogEvent, payload?: EventPayload) => {
  exponeaTracker(eventName, payload);
};

export { TimeTracker, EnterTracker, simpleTracker };
