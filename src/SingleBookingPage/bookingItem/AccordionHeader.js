// @flow

import * as React from 'react';
import { Typography } from '@kiwicom/orbit-components';

type Props = {|
  title: string,
|};

const AccordionHeader = (props: Props) => (
  <div className="title">
    <Typography size="large" type="attention" variant="medium">
      {props.title}
    </Typography>
    <style jsx>
      {`
    .title {
      margin-bottom: 8px;
    `}
    </style>
  </div>
);

export default AccordionHeader;
