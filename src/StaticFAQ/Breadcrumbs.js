// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import css from 'styled-jsx/css';

import CustomBreadcrumbs from './CustomBreadcrumbs';
import BackArrow from './BackArrow';
import type { Breadcrumbs_breadcrumbs } from './__generated__/Breadcrumbs_breadcrumbs.graphql';

type Props = {|
  breadcrumbs: Breadcrumbs_breadcrumbs,
  currentCategory: string,
|};

const Breadcrumbs = ({ breadcrumbs, currentCategory, loginToken }: Props) => {
  return (<CustomBreadcrumbs breadcrumbs={
    [{title: 'Home'}].concat(breadcrumbs).concat([{title: currentCategory}])
  } />)
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
