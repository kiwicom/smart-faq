// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { createFragmentContainer, graphql } from 'react-relay';
import { ChevronLeft } from '@kiwicom/orbit-components/lib/icons';

import Breadcrumb from './Breadcrumb';
import routeDefinitions from '../routeDefinitions';
import type { Breadcrumbs_breadcrumbs } from './__generated__/Breadcrumbs_breadcrumbs.graphql';

type Props = {|
  breadcrumbs: Breadcrumbs_breadcrumbs,
  currentCategory: string,
|};

type BackArrowProp = {|
  id: string,
|};

const BackArrow = ({ id }: BackArrowProp) => {
  const url = id
    ? `${routeDefinitions.STATIC_FAQ}/${id}`
    : routeDefinitions.STATIC_FAQ;
  return (
    <Link to={url}>
      <div className="circle">
        <span className="chevron">
          <ChevronLeft width="12" height="16" fill="#171b1e" />
        </span>
        <style jsx>
          {`
            .circle {
              display: inline-block;
              border-radius: 50%;
              width: 28px;
              height: 28px;
              background-color: #e8edf1;
              vertical-align: middle;
              margin-right: 16px;
              text-align: center;
            }
            .chevron {
              position: relative;
              top: 20%;
            }
          `}
        </style>
      </div>
    </Link>
  );
};

const Breadcrumbs = ({ breadcrumbs, currentCategory }: Props) => {
  const lastCategory = [...breadcrumbs].pop();
  const id = lastCategory && lastCategory.id;

  return (
    <div>
      <BackArrow id={id} />
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
