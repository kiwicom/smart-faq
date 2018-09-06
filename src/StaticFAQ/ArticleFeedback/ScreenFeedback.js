// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Heading, Button, Radio } from '@kiwicom/orbit-components';

import screensList from './screensList';
import commentTypeList from './commentTypeList';
import { Box } from '../../common';

type Props = {|
  changeScreen: (nextScreen: string) => void,
  handleCommentTypeChange: (e: SyntheticEvent<HTMLInputElement>) => void,
  commentType: string,
|};

const style = css`
  form {
    padding: 16px;
  }
  .feedback-title {
    margin-bottom: 16px;
  }
  .button {
    margin-top: 16px;
  }
  .radio-button {
    margin-bottom: 12px;
  }
`;

const ScreenFeedback = ({
  changeScreen,
  handleCommentTypeChange,
  commentType,
}: Props) => {
  const labelMap = {
    [commentTypeList.DONT_LIKE]: `Don't like how this works`,
    [commentTypeList.CONFUSING]: 'Confusing',
    [commentTypeList.NOT_ACCURATE]: 'Incorrect information',
    [commentTypeList.DOESNT_ANSWER]: `Doesn't answer my question`,
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeScreen(screensList.ADDITIONAL_FEEDBACK);
  };

  const renderRadioButton = (labelKey: string, label: string) => (
    <div key={labelKey} className="radio-button">
      <Radio
        label={label}
        value={labelKey}
        checked={commentType === labelKey}
        onChange={handleCommentTypeChange}
      />
      <style jsx>{style}</style>
    </div>
  );

  return (
    <Box border="none" borderRadius="4px" backgroundColor="#f5f7f9">
      <form onSubmit={handleSubmit}>
        <div className="feedback-title">
          <Heading type="title3">Sorry, why wasn&apos;t this helpful?</Heading>
        </div>
        {Object.entries(labelMap).map(labelMapEntry => {
          const [labelKey, label] = labelMapEntry;
          return renderRadioButton(labelKey, String(label));
        })}
        <div className="button">
          <Button onClick={() => {}} disabled={!commentType}>
            Submit
          </Button>
        </div>
      </form>
      <style jsx>{style}</style>
    </Box>
  );
};

export default ScreenFeedback;
