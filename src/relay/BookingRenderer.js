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
    const guaranteeChatBookingInfo =
      // $FlowExpectedError: Expected
      idx(renderState.props, _ => _.booking) ||
      // $FlowExpectedError: Expected
      idx(renderState.props, _ => _.singleBooking) ||
      // $FlowExpectedError: Expected
      idx(renderState.props, _ => _.nearestBooking);

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
