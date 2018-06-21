// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import MediaQuery from 'react-responsive';

import Breadcrumb from './Breadcrumb';
import BackArrow from './BackArrow';
import { withLoginToken } from '../context/User';
import responsiveStyleHelperClasses from '../common/responsiveStyleHelperClasses';

const style = css`
  .breadcrumbs {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  @media only screen and (max-width: 1181px) {
    .breadcrumbs {
      margin: 30px 16px;
    }
  }
`;

type Props = {|
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
    const { loginToken, breadcrumbs } = this.props;
    const firstCategory = [...breadcrumbs].shift();
    const lastCategory = [...breadcrumbs].pop();
    const previousCategory = [...breadcrumbs].slice(-2)[0];
    const id = previousCategory && previousCategory.id;

    const maxBreadcrumbsLengthMobile = 55;

    return (
      <div className="breadcrumbs" data-cy="faq-breadcrumbs">
        {loginToken && (
          <span className="desktopOnly">
            <BackArrow id={id} />
          </span>
        )}
        <Breadcrumb breadcrumb={{ title: firstCategory.title }} />
        <MediaQuery query="screen and (min-width: 320px) and (max-width: 600px)">
          {this.renderBreadCrumbs(breadcrumbs, maxBreadcrumbsLengthMobile)}
        </MediaQuery>
        <MediaQuery query="screen and (min-width: 600px)">
          {this.renderBreadCrumbs(breadcrumbs)}
        </MediaQuery>
        <Breadcrumb breadcrumb={{ title: lastCategory.title }} isCurrent />
        <style jsx>{style}</style>
        <style jsx>{responsiveStyleHelperClasses}</style>
      </div>
    );
  }
}

export default withLoginToken(CustomBreadcrumbs);
