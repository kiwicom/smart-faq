// @flow

import idx from 'idx';
import * as React from 'react';

import QueryRenderer from './QueryRenderer';
import GuaranteeNeededResolver from './GuaranteeNeededResolver';
import type { Props as QueryRendererProps } from './QueryRenderer';

type RenderState<RenderProps> = {
  props: ?RenderProps,
  error: ?Error,
};

class BookingRenderer<RenderProps> extends React.Component<
  QueryRendererProps<RenderProps>,
> {
  renderBooking = (renderState: RenderState<RenderProps>) => {
    const upcomingLeg =
      // $FlowExpectedError: Expected
      idx(renderState.props, _ => _.booking.upcomingLeg) ||
      // $FlowExpectedError: Expected
      idx(renderState.props, _ => _.singleBooking.upcomingLeg) ||
      // $FlowExpectedError: Expected
      idx(renderState.props, _ => _.nearestBooking.upcomingLeg);

    return (
      <React.Fragment>
        {renderState.props && (
          <GuaranteeNeededResolver upcomingLeg={upcomingLeg} />
        )}
        {this.props.render(renderState)}
      </React.Fragment>
    );
  };

  render() {
    return <QueryRenderer {...this.props} render={this.renderBooking} />;
  }
}

export default BookingRenderer;
