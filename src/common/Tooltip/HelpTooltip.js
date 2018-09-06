// @flow
import React from 'react';
import classNames from 'classnames';
import type { Node } from 'react';

import Tooltip from './Tooltip';

export type Props = {
  tooltip: Node,
  placement: 'top' | 'right' | 'bottom' | 'left',
  mobilePlacement:
    | 'sm-top'
    | 'sm-right'
    | 'sm-bottom'
    | 'sm-left'
    | 'sm-left-top'
    | 'sm-right-top',
  children?: Node,
  className?: string,
  open?: boolean,
};

const HelpTooltip = ({
  tooltip,
  children,
  placement,
  mobilePlacement,
  className,
  open,
}: Props) => {
  const tooltipClassNames = classNames('HelpTooltip', placement, className, {
    _visible: open,
  });

  return (
    <div className={tooltipClassNames}>
      <div className="HelpTooltip-content">{children}</div>
      <Tooltip
        open={open}
        placement={placement}
        placementMobile={mobilePlacement}
        mobileArrow={false}
      >
        {tooltip}
      </Tooltip>
      <style jsx>
        {`
        .HelpTooltip {
          position relative;
          display inline-block;
          vertical-align middle;
        }
        .HelpTooltip .HelpTooltip-content {
          display inline-block;
        }
        .HelpTooltip .HelpTooltip-content:after {
          overflow hidden;
        }
        .HelpTooltip .Tooltip {
          z-index 7000;
          animation fadein .2s;
        }
        // fix not to overlay other elements
        .HelpTooltip .Tooltip.out {
          pointer-events none;
        }
        .HelpTooltip .Tooltip.bottom {
          top 100%;
        }
        `}
      </style>
    </div>
  );
};

export const defaultProps = {
  placement: 'bottom',
  mobilePlacement: 'sm-left',
};

HelpTooltip.defaultProps = defaultProps;

export default HelpTooltip;
