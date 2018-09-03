// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Heading, Button, Radio } from '@kiwicom/orbit-components';

import screensList from './screensList';
import { Box } from '../../common';

type Props = {|
  changeScreen: (nextScreen: string) => void,
  handleFeedbackOptionChange: (e: SyntheticEvent<HTMLInputElement>) => void,
  feedbackOptionType: string,
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
  handleFeedbackOptionChange,
  feedbackOptionType,
}: Props) => {
  const labelMap = {
    dontLike: `Don't like how this works`,
    confusing: 'Confusing',
    notAccurate: 'Incorrect information',
    doesntAnswer: `Doesn't answer my question`,
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
        checked={feedbackOptionType === labelKey}
        onChange={handleFeedbackOptionChange}
      />
      <style jsx>{style}</style>
    </div>
  );

  return (
    <Box border="none" borderRadius="4px" backgroundColor="#f5f7f9">
      <form onSubmit={handleSubmit}>
        <div className="feedback-title">
          <Heading type="title3">Sorry, why wasn&#39;t this helpful?</Heading>
        </div>
        {Object.entries(labelMap).map(labelMapEntry => {
          const [labelKey, label] = labelMapEntry;
          return renderRadioButton(labelKey, String(label));
        })}
        <div className="button">
          <Button onClick={() => {}} disabled={!feedbackOptionType}>
            Submit
          </Button>
        </div>
      </form>
      <style jsx>{style}</style>
    </Box>
  );
};

export default ScreenFeedback;
