// @flow

import { withRouter, Route, Switch, MemoryRouter } from 'react-router-dom';
import * as React from 'react';
import css from 'styled-jsx/css';
import idx from 'idx';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { delayTime } from '../helpers/globalStyles';
import ContentHeader from '../ContentHeader';
import StaticFAQ from '../StaticFAQ';
import FAQArticleDetail from '../StaticFAQ/FAQArticleDetail';
import routeDefinitions from '../routeDefinitions';

const style = css`
  div.NoBookingPage {
    min-width: 480px;
    height: 100vh;
  }
  div.NoBookingPage .Header {
    display: flex;
    align-items: center;
    height: 64px;
  }
  div.NoBookingPage .Body {
    display: flex;
    height: calc(100% - (64px));
    scroll-y: none;
  }
  div.FAQ {
    width: 480px;
  }
`;

const MyRoutes = withRouter(({ location }) => {
  const slideRight = idx(location.state, _ => _.slideRight);
  const slideClass = slideRight ? 'SFAQ-TR-slideRight' : 'SFAQ-TR-slideLeft';
  return (
    <TransitionGroup
      className="transition-container"
      childFactory={child =>
        React.cloneElement(child, {
          classNames: slideClass,
        })
      }
    >
      <CSSTransition
        key={location.key}
        classNames={slideClass}
        timeout={{ enter: delayTime, exit: delayTime }}
      >
        <Switch location={location}>
          <Route
            exact
            path={`${routeDefinitions.STATIC_FAQ}/:categoryId?`}
            component={StaticFAQ}
          />
          <Route
            exact
            path={`${routeDefinitions.FAQ_ARTICLE}/:articleId`}
            component={FAQArticleDetail}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

const FAQRoutes = (
  <MemoryRouter initialEntries={[routeDefinitions.STATIC_FAQ]} initialIndex={0}>
    <MyRoutes />
  </MemoryRouter>
);
const NoBookingPage = () => {
  return (
    <div className="NoBookingPage">
      <div className="Header">
        <ContentHeader />
      </div>
      <div className="Body">{FAQRoutes}</div>
      <style jsx global>
        {style}
      </style>
    </div>
  );
};

export default NoBookingPage;
