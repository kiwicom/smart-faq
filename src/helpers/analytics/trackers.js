//  @flow

import emptyCuckoo, { type LogEvent, type EventPayload } from './cuckoo';
import TimeTracker from './TimeTracker';
import EnterTracker from './EnterTracker';

const exponeaTracker = (eventName: LogEvent, payload?: EventPayload) => {
  window.infinario
    ? window.infinario.track(eventName, payload || {})
    : emptyCuckoo.infinario(eventName, payload || {});
};
const simpleTracker = (eventName: LogEvent, payload?: EventPayload) => {
  exponeaTracker(eventName, payload);
};

export { TimeTracker, EnterTracker, simpleTracker };
