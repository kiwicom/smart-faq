// @flow

import * as React from 'react';
import { Text } from '@kiwicom/orbit-components';
import Trans from '@kiwicom/nitro/lib/components/Text';

type Props = {|
  title: string,
|};

const AccordionTitle = (props: Props) => (
  <div className="title">
    <Text size="large" type="attention">
      <Trans t={props.title} />
    </Text>
    <style jsx>
      {`
    .title {
      margin-bottom: 8px;
    `}
    </style>
  </div>
);

export default AccordionTitle;
