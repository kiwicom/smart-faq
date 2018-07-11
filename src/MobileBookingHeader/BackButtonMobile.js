// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import idx from 'idx';
import css from 'styled-jsx/css';
import { ChevronLeft } from '@kiwicom/orbit-components/lib/icons';

type Props = {|
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
  match: {
    params: {
      categoryId: ?string,
    },
  },
|};

const BackButtonMobileStyle = css`
  .back {
    outline: 0;
  }
  .faqTitle {
    display: none;
  }
  @media screen and (orientation: landscape) {
    .faqTitle {
      display: inline-block;
    }
  }
`;

const BackButtonMobile = (props: Props) => {
  const { location } = props.history;
  const hasCategory = idx(props.match, _ => _.params.categoryId) || null;
  const currentpath = location && location.pathname;
  const isArticle = currentpath.includes('article/');

  return (
    <div data-cy="back-button" className="back">
      {hasCategory || isArticle ? (
        <ChevronLeft size="medium" customColor="#45505d" />
      ) : null}
      <style jsx>{BackButtonMobileStyle}</style>
    </div>
  );
};

export default withRouter(BackButtonMobile);
