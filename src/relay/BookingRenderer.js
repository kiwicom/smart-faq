// @flow

import idx from 'idx';
import * as React from 'react';

import QueryRenderer from './QueryRenderer';
import GuaranteeNeededResolver from './GuaranteeNeededResolver';
import type { Props as QueryRendererProps } from './QueryRenderer';
import bookingTypes from '../common/booking/bookingTypes';

type RenderState<RenderProps> = {
  props: ?RenderProps,
  error: ?Error,
};

class BookingRenderer<RenderProps> extends React.Component<
  QueryRendererProps<RenderProps>,
> {
  getBookingByType = (booking: Object) => {
    switch (booking.type) {
      case bookingTypes.ONE_WAY:
        return booking.oneWay;
      case bookingTypes.RETURN:
        return booking.return;
      case bookingTypes.MULTICITY:
        return booking.multicity;
    }
  };

  renderBooking = (renderState: RenderState<RenderProps>) => {
    let guaranteeChatBookingInfo =
      // $FlowExpectedError: Expected
      idx(renderState.props, _ => _.singleBooking) ||
      // $FlowExpectedError: Expected
      idx(renderState.props, _ => _.nearestBooking);
    if (!guaranteeChatBookingInfo) {
      // $FlowExpectedError: Expected
      const booking = idx(renderState.props, _ => _.booking);

      if (booking) {
        guaranteeChatBookingInfo = this.getBookingByType(booking);
      }
    }

    return (
      <React.Fragment>
        {renderState.props && (
          <React.Fragment>
            <GuaranteeNeededResolver booking={guaranteeChatBookingInfo} />
          </React.Fragment>
        )}
        {this.props.render(renderState)}
      </React.Fragment>
    );
  };

  render() {
    const { query, cacheConfig, variables } = this.props;

    return (
      <QueryRenderer
        query={query}
        cacheConfig={cacheConfig}
        variables={variables}
        render={this.renderBooking}
      />
    );
  }
}

export default BookingRenderer;
