// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { ChevronLeft } from '@kiwicom/orbit-components/lib/icons';
import { Typography } from '@kiwicom/orbit-components';

type Props = {|
  text: string,
  history: {
    goBack: () => void,
    push: string => void,
    location: {
      pathname: string,
    },
    entries: Array<{
      pathname: string,
    }>,
  },
|};

const BackButton = (props: Props) => {
  const { location, entries } = props.history;
  const goBack = () => {
    const firstEntry = entries[0];
    const faqCategory = firstEntry.pathname.split('article')[0];
    return firstEntry.pathname === location.pathname
      ? props.history.push(faqCategory)
      : props.history.goBack();
  };
  return (
    <div
      data-cy="back-button"
      className="back"
      onClick={goBack}
      onKeyUp={goBack}
      role="button"
      tabIndex="-1"
    >
      <div className="chevron">
        <ChevronLeft size="small" customColor="#8291a6" />
      </div>
      <Typography type="secondary" variant="bold">
        {props.text}
      </Typography>
      <style jsx>
        {`
          div.back {
            position: absolute;
            top: 18px;
            left: 27px;
            cursor: pointer;
            outline: none;
          }
          div.chevron {
            display: inline-block;
            margin-right: 4px;
          }
          @media only screen and (max-width: 1181px) {
            div.back {
              top: 22px;
              left: 21px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default withRouter(BackButton);
