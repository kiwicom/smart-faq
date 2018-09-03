// @flow
import React from 'react';
import classNames from 'classnames';
import type { Node } from 'react';

export type Placement = 'top' | 'right' | 'bottom' | 'left';
export type PlacementMobile =
  | 'sm-top'
  | 'sm-right'
  | 'sm-bottom'
  | 'sm-left'
  | 'sm-left-top'
  | 'sm-right-top';

type Props = {
  placement: ?Placement,
  placementMobile: ?PlacementMobile,
  children: Node,
  mobileArrow: boolean,
  open?: boolean,
  white?: boolean,
  className?: string,
};

const Tooltip = ({
  open,
  white,
  placement,
  placementMobile,
  className,
  children,
  mobileArrow,
}: Props) => (
  <div
    role="tooltip"
    className={classNames('Tooltip', className, placement, placementMobile, {
      _in: open,
      _out: !open,
      _white: white,
    })}
  >
    <div
      className={classNames('Tooltip-arrow', { _mobileHide: mobileArrow })}
    />
    <div className="Tooltip-inner">{children}</div>
    <style jsx>
      {`
        .Tooltip {
          position: absolute;
          z-index: 999;
          display: none;
        }
        .Tooltip .Tooltip-inner {
          max-width: 200px;
          padding: 8px;
          color: #fff;
          text-align: center;
          background-color: #171b1e;
          border-radius: 3px;
          font-size: 12px;
          line-height: 18px;
        }
        .Tooltip .Tooltip-arrow {
          position: absolute;
          width: 0;
          height: 0;
          border-color: transparent;
          border-style: solid;
        }
        .Tooltip._in {
          display: block;
          -webkit-animation: fadein 0.2s;
          animation: fadein 0.2s;
        }
        .Tooltip._out {
          -webkit-animation: fadeout 0.2s;
          animation: fadeout 0.2s;
        }
        .Tooltip._autoWidth {
          min-width: auto;
          width: auto;
          white-space: nowrap;
        }
        .Tooltip._white .Tooltip-inner {
          border: 1px solid #c6d0dc;
          box-shadow: 0 4px 22px #e9eef2, 0 2px 5px #e9eef2;
          background-color: #fff;
          color: #2e353b;
        }
        .Tooltip._white .Tooltip-arrow:after {
          position: absolute;
          content: '';
          border-style: solid;
          border-color: transparent;
        }
        @media (max-width: 768px) {
          .Tooltip._white .Tooltip-arrow {
            border-left-color: #c6d0dc !important;
          }
          .Tooltip._white .Tooltip-arrow:after {
            margin-top: -4px;
            margin-left: -6px;
            border-width: 4px;
            border-right-width: 0;
            border-left-color: #fff;
          }
        }
        @media (min-width: 769px) {
          .Tooltip._white.top .Tooltip-arrow {
            border-top-color: #c6d0dc;
          }
          .Tooltip._white.top .Tooltip-arrow:after {
            left: 50%;
            margin-top: -6px;
            margin-left: -4px;
            border-width: 4px;
            border-bottom-width: 0;
            border-top-color: #fff;
          }
          .Tooltip._white.right .Tooltip-arrow {
            border-right-color: #c6d0dc;
          }
          .Tooltip._white.right .Tooltip-arrow:after {
            top: 50%;
            margin-left: 2px;
            margin-top: -4px;
            border-width: 4px;
            border-left-width: 0;
            border-right-color: #fff;
          }
          .Tooltip._white.bottom .Tooltip-arrow {
            border-bottom-color: #c6d0dc;
          }
          .Tooltip._white.bottom .Tooltip-arrow:after {
            left: 50%;
            margin-top: 2px;
            margin-left: -4px;
            border-width: 4px;
            border-top-width: 0;
            border-bottom-color: #fff;
          }
          .Tooltip._white.left .Tooltip-arrow {
            border-left-color: #c6d0dc;
          }
          .Tooltip._white.left .Tooltip-arrow:after {
            top: 50%;
            margin-left: -6px;
            margin-top: -4px;
            border-width: 4px;
            border-right-width: 0;
            border-left-color: #fff;
          }
        }
        @media (max-width: 768px) {
          .Tooltip {
            min-width: 100px;
          }
          .Tooltip.sm-top {
            margin-top: -3px;
            padding: 5px 0;
          }
          .Tooltip.sm-right,
          .Tooltip.sm-right-top {
            margin-left: 3px;
            padding: 0 5px;
          }
          .Tooltip.sm-bottom {
            margin-top: 3px;
            padding: 5px 0;
          }
          .Tooltip.sm-left,
          .Tooltip.sm-left-top {
            margin-left: -3px;
            padding: 0 5px;
          }
          .Tooltip.sm-top {
            bottom: 20px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
          }
          .Tooltip.sm-top .Tooltip-arrow {
            bottom: 0;
            left: 50%;
            margin-left: -5px;
            border-width: 5px 5px 0;
            border-top-color: #171b1e;
          }
          .Tooltip.sm-right .Tooltip-arrow {
            top: 50%;
            left: 0;
            margin-top: -5px;
            border-width: 5px 5px 5px 0;
            border-right-color: #171b1e;
          }
          .Tooltip.sm-left .Tooltip-arrow {
            top: 50%;
            right: 0;
            margin-top: -5px;
            border-width: 5px 0 5px 5px;
            border-left-color: #171b1e;
          }
          .Tooltip.sm-bottom .Tooltip-arrow {
            top: 0;
            left: 50%;
            margin-left: -5px;
            border-width: 0 5px 5px;
            border-bottom-color: #171b1e;
          }
          .Tooltip.sm-left-top .Tooltip-arrow,
          .Tooltip.sm-right-top .Tooltip-arrow {
            top: 15px;
            margin-top: -5px;
          }
          .Tooltip.sm-left-top {
            top: 0;
            right: 23px;
          }
          .Tooltip.sm-left-top .Tooltip-arrow {
            right: 0;
            border-width: 5px 0 5px 5px;
            border-left-color: #171b1e;
          }
          .Tooltip.sm-right-top {
            top: 0;
            left: 23px;
          }
          .Tooltip.sm-right-top .Tooltip-arrow {
            left: 0;
            border-width: 5px 5px 5px 0;
            border-right-color: #171b1e;
          }
          .Tooltip._bookingPayment {
            width: 200px;
            -webkit-transform: translateY(-15px);
            transform: translateY(-15px);
          }
          .Tooltip .Tooltip-arrow._mobileHide {
            display: none;
          }
        }
        @media (min-width: 769px) {
          .Tooltip.top {
            margin-top: -3px;
            padding: 5px 0;
          }
          .Tooltip.right {
            margin-left: 3px;
            padding: 0 5px;
          }
          .Tooltip.bottom {
            margin-top: 3px;
            padding: 5px 0;
          }
          .Tooltip.left {
            margin-left: -3px;
            padding: 0 5px;
          }
          .Tooltip.top .Tooltip-arrow {
            bottom: 0;
            left: 50%;
            margin-left: -5px;
            border-width: 5px 5px 0;
            border-top-color: #171b1e;
          }
          .Tooltip.right .Tooltip-arrow {
            top: 50%;
            left: 0;
            margin-top: -5px;
            border-width: 5px 5px 5px 0;
            border-right-color: #171b1e;
          }
          .Tooltip.left .Tooltip-arrow {
            top: 50%;
            right: 0;
            margin-top: -5px;
            border-width: 5px 0 5px 5px;
            border-left-color: #171b1e;
          }
          .Tooltip.bottom .Tooltip-arrow {
            top: 0;
            left: 50%;
            margin-left: -5px;
            border-width: 0 5px 5px;
            border-bottom-color: #171b1e;
          }
          .Tooltip.top.arrow-start .Tooltip-arrow,
          .Tooltip.bottom.arrow-start .Tooltip-arrow {
            left: 10px;
          }
          .Tooltip.top.arrow-end .Tooltip-arrow,
          .Tooltip.bottom.arrow-end .Tooltip-arrow {
            left: auto;
            right: 10px;
          }
          .Tooltip.left.arrow-start .Tooltip-arrow,
          .Tooltip.right.arrow-start .Tooltip-arrow {
            top: 10px;
          }
          .Tooltip.left.arrow-end .Tooltip-arrow,
          .Tooltip.right.arrow-end .Tooltip-arrow {
            top: auto;
            bottom: 10px;
          }
        }
      `}
    </style>
  </div>
);

Tooltip.defaultProps = {
  placement: 'top',
  placementMobile: 'sm-left-top',
};

export default Tooltip;
