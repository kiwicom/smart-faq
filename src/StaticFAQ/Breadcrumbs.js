// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import Breadcrumb from './Breadcrumb';
import BackArrow from './BackArrow';
import { withLoginToken } from '../context/User';
import type { Breadcrumbs_breadcrumbs } from './__generated__/Breadcrumbs_breadcrumbs.graphql';

type Props = {|
  breadcrumbs: Breadcrumbs_breadcrumbs,
  currentCategory: string,
  loginToken: string,
|};

const Breadcrumbs = ({ breadcrumbs, currentCategory, loginToken }: Props) => {
  const lastCategory = [...breadcrumbs].pop();
  const id = lastCategory && lastCategory.id;

  return (
    <React.Fragment>
      {loginToken && <BackArrow id={id} />}
      <Breadcrumb breadcrumb={{ title: 'Home' }} />
      {breadcrumbs.map(breadcrumb => {
        if (breadcrumb && breadcrumb.title) {
          return (
            <Breadcrumb
              key={breadcrumb.id}
              breadcrumb={{ id: breadcrumb.id, title: breadcrumb.title }}
            />
          );
        }

        return null;
      })}
      <Breadcrumb breadcrumb={{ title: currentCategory }} isCurrent />
    </React.Fragment>
  );
};

export default createFragmentContainer(
  withLoginToken(Breadcrumbs),
  graphql`
    fragment Breadcrumbs_breadcrumbs on FAQCategory @relay(plural: true) {
      id
      title
    }
  `,
);
