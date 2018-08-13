// @flow

import * as React from 'react';
import { Text, Button } from '@kiwicom/orbit-components';

import screensList from './screensList';
import Box from '../../common/Box';
import { simpleTracker } from '../../helpers/analytics/trackers';

type Props = {|
  changeScreen: (nextScreen: string) => void,
|};

const ScreenInitial = (props: Props) => (
  <Box
    border="none"
    padding="16px 24px"
    borderRadius="4px"
    backgroundColor="#f5f7f9"
    mobileBackgroundColor="transparent"
  >
    <div className="question">
      <Text type="secondary">
        Didn&apos;t find the answer you were looking for?
      </Text>
    </div>
    <div className="button">
      <Button
        type="secondary"
        width={115}
        onClick={() => {
          simpleTracker('smartFAQCategories', {
            action: 'clickOnLetUsKnow',
          });
          props.changeScreen(screensList.INPUT);
        }}
      >
        Let us know
      </Button>
    </div>
    <style jsx>
      {`
        div.question {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 16px;
        }
        .button {
          display: flex;
          justify-content: center;
        }
      `}
    </style>
  </Box>
);

export default ScreenInitial;
