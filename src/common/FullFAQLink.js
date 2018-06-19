// @flow

import React from 'react';
import { Typography } from '@kiwicom/orbit-components';
import { NewWindow } from '@kiwicom/orbit-components/lib/icons';
import css from 'styled-jsx/css';

import { simpleTracker } from '../helpers/analytics/trackers';

const style = css`
  div.open-icon {
    display: inline-block;
    vertical-align: 1px;
    margin-left: 4px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .primary {
    color: #00a991;
  }
`;

type Props = {
  className?: string,
};

const FullFAQLink = (props: Props) => (
  <div>
    <Typography type="attention" variant="bold">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.kiwi.com/helpcenter/"
        className={props.className}
        onClick={simpleTracker('smartFAQBookingOverview', {
          action: 'goToOldHelp',
        })}
      >
        Full FAQ site
        <span className="inline-icon">
          <div className="open-icon">
            <NewWindow
              customColor={
                props.className === 'primary' ? '#00a991' : '#171b1e'
              }
              size="small"
            />
          </div>
        </span>
      </a>
    </Typography>
    <style jsx>{style}</style>
  </div>
);

export default FullFAQLink;
