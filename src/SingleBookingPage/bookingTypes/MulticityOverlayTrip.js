// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Trans from '@kiwicom/nitro/lib/components/Text';

import MulticityTrip from './MulticityTrip';
import type { MulticityOverlayTrip_booking } from './__generated__/MulticityOverlayTrip_booking.graphql';

type Props = {|
  booking: MulticityOverlayTrip_booking,
|};

type State = {|
  overlapping: boolean,
|};

class MulticityOverlayTrip extends React.Component<Props, State> {
  state = {
    overlapping: true,
  };

  toggleOverlapping = () => {
    this.setState(prevState => ({ overlapping: !prevState.overlapping }));
  };

  render() {
    const { booking } = this.props;
    const { trips } = booking;

    return trips && trips.length > 2 ? (
      <div>
        <div
          className={
            this.state.overlapping
              ? 'multicityWrapper'
              : 'multicityWrapper multicityWrapperIsActive'
          }
        >
          <MulticityTrip booking={booking} />
          <div
            className={
              this.state.overlapping
                ? 'multicityOverlay'
                : 'multicityOverlay multicityOverlayIsActive'
            }
          />
        </div>
        <button className="multicityButton" onClick={this.toggleOverlapping}>
          {this.state.overlapping ? (
            <Trans t={__('smartfaq.single_booking_page.show_more_trips')} />
          ) : (
            <Trans t={__('smartfaq.single_booking_page.show_less_trips')} />
          )}
        </button>
        <style jsx>
          {`
            .multicityWrapper {
              position: relative;
              height: 215px;
              max-height: 215px;
              overflow: hidden;
              transition: all 1s ease-in-out;
            }
            .multicityWrapperIsActive {
              height: auto;
              max-height: 10000px; /* workaround for transition with height: auto */
              transition: all 1s ease-in-out;
            }
            .multicityOverlay {
              display: flex;
              justify-content: center;
              align-items: flex-end;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: inherit;
              background: linear-gradient(
                to bottom,
                rgba(225, 0, 0, 0) 50%,
                rgba(225, 0, 0, 0) 30%,
                rgba(245, 247, 249, 0.59) 30%,
                rgb(245, 247, 249) 100%
              );
            }
            .multicityOverlayIsActive {
              animation: overlay 1s ease-in-out forwards;
            }
            .multicityButton {
              width: 100%;
              background: transparent;
              border: none;
              font-weight: bold;
              text-decoration: underline;
              font-size: 0.9rem;
              cursor: pointer;
            }
            .multicityButton:focus {
              outline: 0;
            }
            @keyframes overlay {
              0% {
                opacity: 1;
              }
              100% {
                opacity: 0;
                z-index: -1;
              }
            }
          `}
        </style>
      </div>
    ) : (
      <MulticityTrip booking={booking} />
    );
  }
}

export default createFragmentContainer(
  MulticityOverlayTrip,
  graphql`
    fragment MulticityOverlayTrip_booking on BookingMulticity {
      trips {
        duration
      }
      ...MulticityTrip_booking
    }
  `,
);
