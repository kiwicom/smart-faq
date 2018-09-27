// @flow

import * as React from 'react';
import { renderToString } from 'react-dom/server';
import css from 'styled-jsx/css';
import { Heading, Button, Radio } from '@kiwicom/orbit-components';
import Trans from '@kiwicom/nitro/lib/components/Text';

import screenList from './screenList';
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
    [commentTypeList.DONT_LIKE]: __(
      'smartfaq.article_feedback.radio_group.dont_like_label',
    ),
    [commentTypeList.CONFUSING]: __(
      'smartfaq.article_feedback.radio_group.confusing_label',
    ),
    [commentTypeList.NOT_ACCURATE]: __(
      'smartfaq.article_feedback.radio_group.not_accurate_label',
    ),
    [commentTypeList.DOESNT_ANSWER]: __(
      'smartfaq.article_feedback.radio_group.doesnt_answer_label',
    ),
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeScreen(screenList.ADDITIONAL_FEEDBACK);
  };

  const renderRadioButton = (labelKey: string, label: string) => {
    const labelText = renderToString(<Trans t={label} />).replace(
      /&#x27;/g,
      "'",
    );

    return (
      <div key={labelKey} className="radio-button">
        <Radio
          label={labelText}
          value={labelKey}
          checked={commentType === labelKey}
          onChange={handleCommentTypeChange}
        />
        <style jsx>{style}</style>
      </div>
    );
  };

  return (
    <Box border="none" borderRadius="4px" backgroundColor="#f5f7f9">
      <form onSubmit={handleSubmit}>
        <div className="feedback-title">
          <Heading type="title3">
            <Trans t={__('smartfaq.article_feedback.radio_group.title')} />
          </Heading>
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
