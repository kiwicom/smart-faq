// @flow
import * as React from 'react';

import { type LogEvent, type EventPayload } from './cuckoo';
import { simpleTracker } from './trackers';

const EnterTracker = <TargetProps>(
  TargetComponent: React.ComponentType<TargetProps>,
  eventName: LogEvent,
  payloadBuilder?: (props: TargetProps) => EventPayload,
): React.ComponentType<TargetProps> => {
  class EnterTracked extends React.Component<TargetProps> {
    componentDidMount() {
      const payload = payloadBuilder ? { ...payloadBuilder(this.props) } : {};
      simpleTracker(eventName, payload);
    }
    render() {
      return <TargetComponent {...this.props} />;
    }
  }
  return EnterTracked;
};

export default EnterTracker;
