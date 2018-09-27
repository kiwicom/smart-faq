// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import MediaQuery from 'react-responsive';

import Breadcrumb from './Breadcrumb';
import BackArrow from './BackArrow';
import responsiveStyleHelperClasses from '../../common/responsiveStyleHelperClasses';
import { BookingState } from '../../context/BookingState';
import { withLoginToken, withSimpleToken } from '../../context/User';

const style = css`
  .breadcrumbs {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  @media only screen and (max-width: 901px) {
    .breadcrumbs {
      margin: 30px 16px;
    }
  }
`;

type Props = {|
  loginToken: ?string,
  simpleToken: ?string,
  breadcrumbs: Array<{ id: ?string, title: string }>,
  loginToken: ?string,
|};

class CustomBreadcrumbs extends React.Component<Props> {
  renderBreadCrumbs = (breadcrumbs, maxBreadcrumbsLength) => {
    const breadcrubsLength = breadcrumbs.map(b => b.title).join().length;
    if (maxBreadcrumbsLength && breadcrubsLength > maxBreadcrumbsLength) {
      const length = breadcrumbs.length;
      breadcrumbs = breadcrumbs.map((b, i) => {
        if (i !== 0 && i !== length - 1 && i !== length - 2) {
          return { ...b, title: '...' };
        }
        return b;
      });
    }
    return breadcrumbs
      .slice(1, breadcrumbs.length - 1)
      .map(breadcrumb => (
        <Breadcrumb
          key={breadcrumb.id}
          breadcrumb={{ id: breadcrumb.id, title: breadcrumb.title }}
        />
      ));
  };
  render() {
    const { breadcrumbs, loginToken, simpleToken } = this.props;
    const firstCategory = [...breadcrumbs].shift();
    const lastCategory = [...breadcrumbs].pop();
    const previousCategory = [...breadcrumbs].slice(-2)[0];
    const id = previousCategory && previousCategory.id;
    const isLoggedIn = loginToken || simpleToken;

    const maxBreadcrumbsLengthMobile = 55;

    return (
      <div className="breadcrumbs" data-cy="faq-breadcrumbs">
        <BookingState.Consumer>
          {({ showBooking }) => {
            if (isLoggedIn && showBooking) {
              return (
                <span className="desktopOnly" data-cy="back-button">
                  <BackArrow id={id} />
                </span>
              );
            }

            return null;
          }}
        </BookingState.Consumer>
        <Breadcrumb breadcrumb={{ title: firstCategory.title }} />
        <MediaQuery maxWidth="600px">
          {this.renderBreadCrumbs(breadcrumbs, maxBreadcrumbsLengthMobile)}
        </MediaQuery>
        <MediaQuery minWidth="600px">
          {this.renderBreadCrumbs(breadcrumbs)}
        </MediaQuery>
        <Breadcrumb breadcrumb={{ title: lastCategory.title }} isCurrent />
        <style jsx>{style}</style>
        <style jsx>{responsiveStyleHelperClasses}</style>
      </div>
    );
  }
}

export default withLoginToken(withSimpleToken(CustomBreadcrumbs));
