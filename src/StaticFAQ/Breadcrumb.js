// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '@kiwicom/orbit-components';
import { ChevronRight } from '@kiwicom/orbit-components/lib/icons';

type BreadcrumbType = {|
  id?: ?string,
  title: string,
|};

type Props = {
  breadcrumb: BreadcrumbType,
  isCurrent: boolean,
};

const Breadcrumb = ({ breadcrumb, isCurrent }: Props) => {
  const url = breadcrumb.id ? `/faq/${breadcrumb.id}` : '/faq/';
  const title = (
    <Text type="secondary" size="small" element="span">
      {breadcrumb.title}
    </Text>
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
          <ChevronRight size="small" customColor="#bac7d5" />
        </div>
      )}
      <style jsx>
        {`
          .breadcrumb,
          .breadcrumb-icon {
            display: inline-block;
            color: #7f91a8;
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
