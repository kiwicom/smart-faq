// @flow

import idx from 'idx';
import * as React from 'react';
import { graphql } from 'react-relay';
import css from 'styled-jsx/css';
import { Heading } from '@kiwicom/orbit-components';
import Trans from '@kiwicom/nitro/lib/components/Text';

import { Desktop } from '../common/Responsive';
import QueryRenderer from '../relay/QueryRenderer';
import BookingError from '../SingleBookingPage/BookingError';
import { Loader, ScrollableContent } from '../common';
import BookingCardsList from './BookingCardsList';
import type { AllBookingsQuery } from './__generated__/AllBookingsQuery.graphql';

const styles = css`
  .allBookings {
    width: 100%;
    height: 100%;
    padding: 40px 30px 40px 30px;
  }
  div.scroll {
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 305px;
  }
  @media only screen and (max-width: 900px) {
    .allBookings {
      display: grid;
      place-items: center center;
      padding: 20px 0px 20px 0px;
    }
  }
`;

type Props = {||};

type AllBookingsQueryProps = {
  props: ?AllBookingsQuery,
  error: ?Error,
};

const allBookingsQuery = graphql`
  query AllBookingsQuery {
    future: customerBookings(only: FUTURE) {
      ...BookingCardsList_booking
    }
    past: customerBookings(only: PAST) {
      ...BookingCardsList_booking
    }
  }
`;

class AllBooking extends React.Component<Props> {
  renderBookings = (queryProps: AllBookingsQueryProps) => {
    const { props, error } = queryProps;

    const future = idx(props, _ => _.future);
    const past = idx(props, _ => _.past);

    if (error) {
      return <BookingError />;
    }

    return (
      <ScrollableContent styles="background-color: #f5f7f9;">
        <div className="allBookings">
          <Desktop>
            <Heading type="title2">
              <Trans t={__('smartfaq.all_bookings.title')} />
            </Heading>
          </Desktop>
          {future && (
            <div data-cy="upcoming-bookings">
              <BookingCardsList
                booking={future}
                title={
                  <Trans t={__('smartfaq.all_bookings.upcoming.subtitle')} />
                }
              />
            </div>
          )}
          {past && (
            <div data-cy="past-bookings">
              <BookingCardsList
                booking={past}
                title={<Trans t={__('smartfaq.all_bookings.past.subtitle')} />}
              />
            </div>
          )}
          {!future && !past && <Loader />}
          <style>{styles}</style>
        </div>
      </ScrollableContent>
    );
  };

  render() {
    return (
      <QueryRenderer
        query={allBookingsQuery}
        render={this.renderBookings}
        cacheConfig={{ force: true }}
        variables={{}}
      />
    );
  }
}

export default AllBooking;
