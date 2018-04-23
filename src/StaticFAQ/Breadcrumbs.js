// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import Breadcrumb from './Breadcrumb';
import type { Breadcrumbs_breadcrumbs } from './__generated__/Breadcrumbs_breadcrumbs.graphql';

type Props = {|
  breadcrumbs: Breadcrumbs_breadcrumbs,
  currentCategory: string,
|};

const Breadcrumbs = ({ breadcrumbs, currentCategory }: Props) => {
  return (
    <div>
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
    </div>
  );
};

export default createFragmentContainer(
  Breadcrumbs,
  graphql`
    fragment Breadcrumbs_breadcrumbs on FAQCategory @relay(plural: true) {
      id
      title
    }
  `,
);
