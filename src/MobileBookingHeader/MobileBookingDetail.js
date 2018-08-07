// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { ChevronDown, ChevronUp } from '@kiwicom/orbit-components/lib/icons';
import { Button, TextLink } from '@kiwicom/orbit-components';
import css from 'styled-jsx/css';

import { updateFAQSection } from '../common/booking/utils';
import bookingTypes from '../common/booking/bookingTypes';
import { BookingState } from '../context/BookingState';
import type { BookingStateType } from '../context/BookingState';
import type { MobileBookingDetail_booking } from './__generated__/MobileBookingDetail_booking.graphql';
import OneWayTrip from './OneWayTrip';
import ReturnTrip from './ReturnTrip';
import MultiCityTrip from './MultiCityTrip';
import formatBookingId from '../helpers/formatBookingId';
import replaceWithCurrentDomain from '../helpers/replaceWithCurrentDomain';
import { Portrait, Landscape } from '../common/Responsive';

type ContextProps = {
  onSetFAQSection: (isUrgent: boolean, isPastBooking: boolean) => void,
};

type ComponentProps = {
  +booking: MobileBookingDetail_booking,
  onSetFAQSection: (isUrgent: boolean, isPastBooking: boolean) => void,
};

type MobileBookingControlsProps = {|
  +manageBookingURL: ?string,
|};

type Props = ComponentProps;

const MobileBookingControlsStyle = css`
  .manageBookingButton {
    height: 32px;
    margin: 4px 0;
    margin-bottom: 8px;
    display: block;
    text-decoration: none;
  }

  .selectBookingButton {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;
    text-align: center;
    color: #00a991;
    margin-top: 12px;
    margin-bottom: 8px;
  }
`;

type TripIdProps = {|
  isPastBooking: ?boolean,
  databaseId: ?number,
|};

const TripId = (props: TripIdProps) =>
  props.databaseId && (
    <div className="TripId">
      <span>
        {`${props.isPastBooking ? 'Past' : 'Upcoming'} trip # ${formatBookingId(
          props.databaseId,
        )}`}
      </span>
      <style jsx>
        {`
          .TripId {
            font-size: 14px;
            line-height: 1.4;
            color: #7f91a8;
            margin-top: 8px;
          }
        `}
      </style>
    </div>
  );

type ManageMyBookingButtonProps = {|
  +manageBookingURL: ?string,
|};

const ManageMyBookingButton = (props: ManageMyBookingButtonProps) => (
  <div className="manageBookingButton">
    <Button
      block
      onClick={() => {
        window.open(props.manageBookingURL, '_blank', 'noopener');
      }}
      type="secondary"
      size="small"
    >
      Manage My Booking
    </Button>
    <style jsx>{MobileBookingControlsStyle}</style>
  </div>
);

const SelectAnotherBookingButton = () => (
  <div className="selectBookingButton">
    <BookingState.Consumer>
      {({ onDisplayAll }: BookingStateType) => (
        <div data-cy="btn-other-bookings">
          <TextLink
            onClick={e => {
              e.preventDefault();
              onDisplayAll();
            }}
            external={false}
            type="primary"
          >
            Select another booking
          </TextLink>
        </div>
      )}
    </BookingState.Consumer>
    <style jsx>{MobileBookingControlsStyle}</style>
  </div>
);

const MobileBookingControls = (props: MobileBookingControlsProps) => (
  <React.Fragment>
    <ManageMyBookingButton manageBookingURL={props.manageBookingURL} />
    <SelectAnotherBookingButton />
  </React.Fragment>
);

const MobileBookingSummaryStyle = css`
  .topRow {
    display: flex;
  }

  .topRow:focus {
    outline: 0;
  }

  .Chevron {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
  }
`;

type State = {
  expanded: boolean,
};

const renderByType = booking => {
  if (booking.type === bookingTypes.ONE_WAY) {
    return <OneWayTrip booking={booking} />;
  }

  if (booking.type === bookingTypes.RETURN) {
    return <ReturnTrip booking={booking} />;
  }

  if (booking.type === bookingTypes.MULTICITY) {
    return <MultiCityTrip booking={booking} />;
  }

  return null;
};

class MobileBookingDetail extends React.Component<Props, State> {
  state = {
    expanded: true,
  };

  componentDidMount() {
    updateFAQSection(this.props);
  }

  componentDidUpdate() {
    updateFAQSection(this.props);
  }

  toggle() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  renderPortrait() {
    const { booking } = this.props;
    const { isPastBooking, databaseId } = booking;
    return (
      <React.Fragment>
        <div
          className="topRow"
          onClick={() => this.toggle()}
          onKeyDown={() => this.toggle()}
          role="button"
          tabIndex="0"
        >
          <div style={{ flexGrow: 1 }}>
            <TripId databaseId={databaseId} isPastBooking={isPastBooking} />
            {renderByType(booking)}
          </div>
          <div className="Chevron">
            {this.state.expanded ? (
              <ChevronUp customColor="#bac7d5" />
            ) : (
              <ChevronDown customColor="#bac7d5" />
            )}
          </div>
        </div>
        {this.state.expanded ? (
          <div className="bottomRow">
            <MobileBookingControls
              manageBookingURL={
                booking.directAccessURL &&
                replaceWithCurrentDomain(booking.directAccessURL)
              }
            />
          </div>
        ) : null}
        <style jsx>{MobileBookingSummaryStyle}</style>
      </React.Fragment>
    );
  }

  renderLandscape() {
    const { booking } = this.props;
    const { isPastBooking, databaseId } = booking;
    return (
      <div>
        <div className="flexToolbar">
          <div>
            <TripId databaseId={databaseId} isPastBooking={isPastBooking} />
            {renderByType(booking)}
          </div>
          <div>
            <SelectAnotherBookingButton />
          </div>
        </div>
        <div className="centered">
          <ManageMyBookingButton
            manageBookingURL={
              booking.directAccessURL &&
              replaceWithCurrentDomain(booking.directAccessURL)
            }
          />
        </div>
        <style jsx>
          {`
            .centered {
              max-width: 288px;
              margin: auto;
            }
            .flexToolbar {
              display: flex;
              justify-content: space-between;
            }
          `}
        </style>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Portrait>{this.renderPortrait()}</Portrait>
        <Landscape>{this.renderLandscape()}</Landscape>
      </React.Fragment>
    );
  }
}

const MobileBookingDetailWithFAQHandler = (props: ComponentProps) => (
  <BookingState.Consumer>
    {({ onSetFAQSection }: ContextProps) => (
      <MobileBookingDetail {...props} onSetFAQSection={onSetFAQSection} />
    )}
  </BookingState.Consumer>
);

export default createFragmentContainer(
  MobileBookingDetailWithFAQHandler,
  graphql`
    fragment MobileBookingDetail_booking on BookingInterface {
      type
      databaseId
      isPastBooking
      directAccessURL
      ... on BookingOneWay {
        ...OneWayTrip_booking
        trip {
          departure {
            time
          }
        }
      }
      ... on BookingReturn {
        ...ReturnTrip_booking
        outbound {
          departure {
            time
          }
        }
      }
      ... on BookingMulticity {
        ...MultiCityTrip_booking
        start {
          time
        }
      }
    }
  `,
);
