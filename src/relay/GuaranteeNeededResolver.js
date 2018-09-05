// @flow

import idx from 'idx';
import * as React from 'react';
import { DateTime } from 'luxon';
import { graphql, createFragmentContainer } from 'react-relay';

import { GuaranteeChatInfoState } from '../context/GuaranteeChatInfo';
import type { GuaranteeChatBookingInfo } from '../context/GuaranteeChatInfo';
import type { GuaranteeNeededResolver_booking } from './__generated__/GuaranteeNeededResolver_booking.graphql';

type ComponentProps = {|
  booking: ?GuaranteeNeededResolver_booking,
|};

type Props = {|
  ...ComponentProps,
  showGuaranteeChat: boolean,
  guaranteeChatBookingInfo: ?GuaranteeChatBookingInfo,
  toggleGuaranteeChat: boolean => void,
  onSetBookingInfo: GuaranteeChatBookingInfo => void,
|};

const THRESHOLD = 4; // hours before departure

class GuaranteeNeededResolver extends React.Component<Props> {
  componentDidMount() {
    this.shouldShowGuaranteeChat();
    this.updateBookingInfo();
  }

  componentDidUpdate() {
    this.shouldShowGuaranteeChat();
    this.updateBookingInfo();
  }

  componentWillUnmount() {
    const { showGuaranteeChat, toggleGuaranteeChat } = this.props;

    showGuaranteeChat && toggleGuaranteeChat(false);
  }

  updateBookingInfo = () => {
    const { booking, guaranteeChatBookingInfo, onSetBookingInfo } = this.props;
    const bid = booking && booking.databaseId;

    if (bid === idx(guaranteeChatBookingInfo, _ => _.bid)) {
      return;
    }

    const status = booking && booking.status;
    const departureCity = idx(
      booking,
      _ => _.upcomingLeg.departure.airport.city.name,
    );
    const arrivalCity = idx(
      booking,
      _ => _.upcomingLeg.arrival.airport.city.name,
    );
    const departureAirport = idx(
      booking,
      _ => _.upcomingLeg.departure.airport.code,
    );
    const arrivalAirport = idx(
      booking,
      _ => _.upcomingLeg.arrival.airport.code,
    );
    const phone = idx(booking, _ => _.contactDetails.phone);
    const email = idx(booking, _ => _.contactDetails.email);
    const firstName = idx(booking, _ => _.contactDetails.passenger.firstname);
    const lastName = idx(booking, _ => _.contactDetails.passenger.lastname);

    onSetBookingInfo({
      bid,
      status,
      departureCity,
      departureAirport,
      arrivalCity,
      arrivalAirport,
      phone,
      email,
      firstName,
      lastName,
    });
  };

  shouldShowGuaranteeChat = () => {
    const booking = this.props.booking;
    const departureTime = idx(booking, _ => _.upcomingLeg.departure.time);
    const arrivalTime = idx(booking, _ => _.upcomingLeg.arrival.time);
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
      idx(this.props.booking, _ => _.upcomingLeg.guarantee) === 'KIWICOM' &&
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

const WrappedGuaranteeNeededResolver = ({ booking }: ComponentProps) => (
  <GuaranteeChatInfoState.Consumer>
    {({
      showGuaranteeChat,
      isChatEnabled,
      toggleGuaranteeChat,
      onSetBookingInfo,
      guaranteeChatBookingInfo,
    }) => {
      if (!isChatEnabled()) {
        // do not process upcomingLeg info at all if chat is disabled
        return null;
      }

      return (
        <GuaranteeNeededResolver
          booking={booking}
          showGuaranteeChat={showGuaranteeChat}
          toggleGuaranteeChat={toggleGuaranteeChat}
          onSetBookingInfo={onSetBookingInfo}
          guaranteeChatBookingInfo={guaranteeChatBookingInfo}
        />
      );
    }}
  </GuaranteeChatInfoState.Consumer>
);

export const UnwrappedGuaranteeNeededResolver = GuaranteeNeededResolver;

export default createFragmentContainer(
  WrappedGuaranteeNeededResolver,
  graphql`
    fragment GuaranteeNeededResolver_booking on BookingInterface {
      databaseId
      status
      contactDetails {
        phone
        email
        passenger {
          firstname
          lastname
        }
      }
      upcomingLeg {
        guarantee
        arrival {
          time
          airport {
            city {
              name
            }
            code
          }
        }
        departure {
          time
          airport {
            city {
              name
            }
            code
          }
        }
      }
    }
  `,
);
