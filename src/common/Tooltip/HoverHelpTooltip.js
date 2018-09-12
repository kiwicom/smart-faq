// @flow
import React, { PureComponent } from 'react';

import HelpTooltip, {
  defaultProps as HelpTooltipDefaultProps,
} from './HelpTooltip';
import type { Props as HelpTooptipProps } from './HelpTooltip';

type Props = HelpTooptipProps & {
  disabled: boolean,
  iconName: string,
  tracker?: () => void,
};

type State = {
  opened: boolean,
};

export default class HoverHelpTooltip extends PureComponent<Props, State> {
  static defaultProps = {
    ...HelpTooltipDefaultProps,
    iconName: 'md-info-outline',
    disabled: false,
  };

  state: State = {
    opened: false,
  };

  show = () => {
    if (!this.props.disabled) {
      this.setState({ opened: true });
    }
    this.props.tracker && this.props.tracker();
  };

  hide = () => {
    if (!this.props.disabled) {
      this.setState({ opened: false });
    }
  };

  render() {
    const { disabled, iconName, children, ...helpTooptipProps } = this.props;

    return (
      <HelpTooltip {...helpTooptipProps} open={!disabled && this.state.opened}>
        <div
          onTouchStart={this.show}
          onTouchEnd={this.hide}
          onMouseEnter={this.show}
          onMouseLeave={this.hide}
        >
          {children || (
            <div>
              <i className={iconName} />
            </div>
          )}
        </div>
      </HelpTooltip>
    );
  }
}
