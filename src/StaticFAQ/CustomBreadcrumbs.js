// @flow

import * as React from 'react';
import css from 'styled-jsx/css';

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
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .breadcrumbs {
      margin: 30px 16px;
    }
  }
`;

type Props = {|
  breadcrumbs: Array<{ id: ?string, title: string }>,
  loginToken: string,
|};

const CustomBreadcrumbs = ({ breadcrumbs, loginToken }: Props) => {
  const firstCategory = [...breadcrumbs].shift();
  const lastCategory = [...breadcrumbs].pop();
  const previousCategory = [...breadcrumbs].slice(-2)[0];
  const id = previousCategory && previousCategory.id;

  return (
    <div className="breadcrumbs">
      {loginToken && (
        <span className="desktopOnly">
          <BackArrow id={id} />
        </span>
      )}
      <Breadcrumb breadcrumb={{ title: firstCategory.title }} />
      {breadcrumbs
        .slice(1, breadcrumbs.length - 1)
        .map(breadcrumb => (
          <Breadcrumb
            key={breadcrumb.id}
            breadcrumb={{ id: breadcrumb.id, title: breadcrumb.title }}
          />
        ))}
      <Breadcrumb breadcrumb={{ title: lastCategory.title }} isCurrent />
      <style jsx>{style}</style>
      <style jsx>{responsiveStyleHelperClasses}</style>
    </div>
  );
};

export default withLoginToken(CustomBreadcrumbs);
