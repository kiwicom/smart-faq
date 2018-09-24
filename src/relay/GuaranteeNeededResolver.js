// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import { simpleTracker } from '../helpers/analytics/trackers';
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
    const showGuaranteeChat = idx(
      booking,
      _ => _.customerSupport.hasGuaranteeChat,
    );

    if (showGuaranteeChat !== this.props.showGuaranteeChat) {
      if (showGuaranteeChat) {
        simpleTracker('smartFAQBookingOverview', {
          action: 'chatEnabled',
        });
      }

      this.props.toggleGuaranteeChat(Boolean(showGuaranteeChat));
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
      customerSupport {
        hasGuaranteeChat
      }
      upcomingLeg(guarantee: KIWICOM) {
        arrival {
          airport {
            city {
              name
            }
            code
          }
        }
        departure {
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
