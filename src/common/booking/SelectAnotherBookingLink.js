// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { TextLink } from '@kiwicom/orbit-components';

import { UserContext } from '../../context/User';
import { BookingState } from '../../context/BookingState';
import { simpleTracker } from '../../helpers/analytics/trackers';
import type { UserContextType } from '../../context/User';
import type { BookingStateType } from '../../context/BookingState';

type Props = {|
  history: {
    push: string => void,
  },
|};

const SelectAnotherBookingLink = (props: Props) => (
  <React.Fragment>
    <BookingState.Consumer>
      {({ onDisplayAll }: BookingStateType) => (
        <UserContext.Consumer>
          {({ simpleToken, user }: UserContextType) => (
            <div
              className="headerLink selectBookingButtonMobile"
              data-cy="btn-other-bookings"
            >
              <TextLink
                onClick={e => {
                  e.preventDefault();
                  simpleTracker('smartFAQBookingOverview', {
                    action: 'selectAnotherBooking',
                  });
                  simpleToken && !user
                    ? props.history.push('/sign-in')
                    : onDisplayAll();
                }}
                external={false}
                type="primary"
              >
                Select another booking
              </TextLink>
            </div>
          )}
        </UserContext.Consumer>
      )}
    </BookingState.Consumer>
    <style jsx>
      {`
        .headerLink {
          font-size: 12px;
        }
        @media only screen and (max-width: 901px) {
          .selectBookingButtonMobile {
            font-size: 12px;
            font-weight: 500;
            line-height: 1.4;
            text-align: center;
            color: #00a991;
            margin-top: 12px;
            margin-bottom: 8px;
          }
        }
      `}
    </style>
  </React.Fragment>
);

export default withRouter(SelectAnotherBookingLink);
