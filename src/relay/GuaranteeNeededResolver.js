// @flow

import idx from 'idx';
import * as React from 'react';
import { DateTime } from 'luxon';
import { graphql, createFragmentContainer } from 'react-relay';

import { BookingState } from '../context/BookingState';
import type { GuaranteeNeededResolver_upcomingLeg } from './__generated__/GuaranteeNeededResolver_upcomingLeg.graphql';

type ComponentProps = {|
  upcomingLeg: ?GuaranteeNeededResolver_upcomingLeg,
|};

type Props = {|
  ...ComponentProps,
  showGuaranteeChat: boolean,
  toggleGuaranteeChat: boolean => void,
|};

const THRESHOLD = 4; // hours before departure

class GuaranteeNeededResolver extends React.Component<Props> {
  componentDidMount() {
    this.shouldShowGuaranteeChat();
  }

  componentDidUpdate() {
    this.shouldShowGuaranteeChat();
  }

  componentWillUnmount() {
    const { showGuaranteeChat, toggleGuaranteeChat } = this.props;

    showGuaranteeChat && toggleGuaranteeChat(false);
  }

  shouldShowGuaranteeChat = () => {
    const departureTime = idx(this.props.upcomingLeg, _ => _.departure.time);
    const arrivalTime = idx(this.props.upcomingLeg, _ => _.arrival.time);
    const hoursBeforeDeparture = departureTime
      ? DateTime.fromJSDate(new Date(departureTime), { zone: 'utc' }).diffNow(
          'hours',
        ).hours
      : null;
    const hoursBeforeArrival = arrivalTime
      ? DateTime.fromJSDate(new Date(arrivalTime), { zone: 'utc' }).diffNow(
          'hours',
        ).hours
      : null;
    const showGuaranteeChat = Boolean(
      idx(this.props.upcomingLeg, _ => _.guarantee) === 'KIWICOM' &&
        hoursBeforeDeparture &&
        hoursBeforeArrival &&
        THRESHOLD > hoursBeforeDeparture &&
        hoursBeforeArrival > 0,
    );

    if (showGuaranteeChat !== this.props.showGuaranteeChat) {
      this.props.toggleGuaranteeChat(showGuaranteeChat);
    }
  };

  render() {
    return null;
  }
}

const WrappedGuaranteeNeededResolver = ({ upcomingLeg }: ComponentProps) => (
  <BookingState.Consumer>
    {({ showGuaranteeChat, isChatEnabled, toggleGuaranteeChat }) => {
      if (!isChatEnabled()) {
        // do not process upcomingLeg info at all if chat is disabled
        return null;
      }

      return (
        <GuaranteeNeededResolver
          upcomingLeg={upcomingLeg}
          showGuaranteeChat={showGuaranteeChat}
          toggleGuaranteeChat={toggleGuaranteeChat}
        />
      );
    }}
  </BookingState.Consumer>
);

export const UnwrappedGuaranteeNeededResolver = GuaranteeNeededResolver;

export default createFragmentContainer(
  WrappedGuaranteeNeededResolver,
  graphql`
    fragment GuaranteeNeededResolver_upcomingLeg on Leg {
      arrival {
        time
      }
      departure {
        time
      }
      guarantee
    }
  `,
);
