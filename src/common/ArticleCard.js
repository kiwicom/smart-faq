// @flow

import * as React from 'react';
import { Typography } from '@kiwicom/orbit-components';

type Props = {|
  title: string,
  content: string,
|};

const ArticleCard = (props: Props) => (
  <div className="faq-category">
    <div>
      <Typography type="attention" size="large">
        {props.title}
      </Typography>
    </div>
    <div>
      <Typography type="secondary">{props.content}</Typography>
    </div>
    <style jsx>
      {`
        .faq-category {
          padding: 14px 70px 14px 22px;
          position: relative;
          margin-top: 24px;
          height: 100px;
          width: 100%;
          border-radius: 3px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
        }
      `}
    </style>
  </div>
);

export default ArticleCard;
