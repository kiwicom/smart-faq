// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Heading, Button, Radio } from '@kiwicom/orbit-components';

import screensList from './screensList';
import { Box } from '../../common';

type Props = {|
  changeScreen: (nextScreen: string) => void,
|};

type State = {|
  selectedOption: string,
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

class ScreenFeedback extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedOption: '',
    };
  }

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.changeScreen(screensList.ADDITIONAL_FEEDBACK);
  };

  handleOptionChange = e => {
    this.setState({ selectedOption: e.target.value });
  };

  renderRadioButton = (label, index) => (
    <div key={index} className="radio-button">
      <Radio
        label={label}
        value={`option${index}`}
        checked={this.state.selectedOption === `option${index}`}
        hasError={false}
        onChange={this.handleOptionChange}
      />
      <style jsx>{style}</style>
    </div>
  );

  render() {
    const labels = [
      `Don't like how this works`,
      'Confusing',
      'Incorrect information',
      `Doesn't answer my question`,
    ];

    return (
      <Box border="none" borderRadius="4px" backgroundColor="#f5f7f9">
        <form onSubmit={this.handleSubmit}>
          <div className="feedback-title">
            <Heading type="title3">Sorry, why wasn't this helpful?</Heading>
          </div>
          {labels.map((label, i) => this.renderRadioButton(label, i))}
          <div className="button">
            <Button onClick={() => {}}>Submit</Button>
          </div>
        </form>
        <style jsx>{style}</style>
      </Box>
    );
  }
}

export default ScreenFeedback;
