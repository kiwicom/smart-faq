// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@kiwicom/orbit-components';
import { ChevronRight } from '@kiwicom/orbit-components/lib/icons';

import routeDefinitions from '../routeDefinitions';

type BreadcrumbType = {|
  id?: string,
  title: string,
|};

type Props = {
  breadcrumb: BreadcrumbType,
  isCurrent: boolean,
};

const Breadcrumb = ({ breadcrumb, isCurrent }: Props) => {
  const url = breadcrumb.id
    ? `${routeDefinitions.STATIC_FAQ}/${breadcrumb.id}`
    : routeDefinitions.STATIC_FAQ;
  const title = (
    <Typography type="secondary" size="small">
      {breadcrumb.title}
    </Typography>
  );

  return (
    <div className="breadcrumb">
      {isCurrent ? (
        title
      ) : (
        <Link to={url} style={{ textDecoration: 'none' }}>
          {title}
        </Link>
      )}
      {!isCurrent && (
        <div className="breadcrumb-icon">
          <ChevronRight width={9} height={9} />
        </div>
      )}
      <style jsx>
        {`
          .breadcrumb,
          .breadcrumb-icon {
            display: inline-block;
          }

          .breadcrumb-icon {
            margin: 0 8px;
          }
        `}
      </style>
    </div>
  );
};

Breadcrumb.defaultProps = {
  isCurrent: false,
};

export default Breadcrumb;
