// @flow
import * as React from 'react';

import { type LogEvent, type EventPayload } from './cuckoo';
import { simpleTracker } from './trackers';

type State = {
  openTimestamp: number,
};
const TimeTracker = <TargetProps>(
  TargetComponent: React.ComponentType<TargetProps>,
  eventName: LogEvent,
  payloadBuilder?: (props: TargetProps) => EventPayload | EventPayload,
): React.ComponentType<TargetProps> => {
  class TimeTracked extends React.Component<TargetProps, State> {
    constructor(props: TargetProps) {
      super(props);
      this.state = { openTimestamp: +new Date() };
    }
    state = {
      openTimestamp: 0,
    };
    componentWillUnmount() {
      const timeOpen = (+new Date() - this.state.openTimestamp) / 1000;
      const payload = payloadBuilder
        ? { ...payloadBuilder(this.props), timeOpen }
        : {};
      simpleTracker(eventName, payload)();
    }
    render() {
      return <TargetComponent {...this.props} />;
    }
  }
  return TimeTracked;
};
export default TimeTracker;
