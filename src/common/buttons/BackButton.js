// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Text } from '@kiwicom/orbit-components';
import { ChevronLeft } from '@kiwicom/orbit-components/lib/icons';

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
    if (props.text === 'Search') {
      return props.history.push('/faq');
    }
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
      <Text type="secondary" weight="bold" element="span">
        {props.text}
      </Text>
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
          @media only screen and (max-width: 901px) {
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
