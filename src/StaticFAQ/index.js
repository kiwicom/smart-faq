// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Link } from 'react-router-dom';
import { Typography } from '@kiwicom/orbit-components';
import { Magnify } from '@kiwicom/orbit-components/lib/icons';

import Input from './../common/Input';
import CloseIcon from '../common/CloseIcon';
import FAQCategory from './FAQCategory';
import routeDefinitions from '../routeDefinitions';

const style = css`
  .static-faq {
    width: 480px;
  }
  .static-faq-header {
    width: 100%;
    height: 64px;
    box-shadow: inset 0 -1px 0 0 #e8edf1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .static-faq-body {
    padding: 24px 40px;
  }
  .signIn {
    position: absolute;
    top: 23px;
    left: 16px;
  }
`;

type Props = {||};

type State = {|
  value: string,
|};

const renderStaticFAQ = (item, i) => <FAQCategory key={i} />;

class StaticFAQ extends React.Component<Props, State> {
  state = {
    value: '',
  };

  handleSearchChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="static-faq">
        <CloseIcon />
        <Link to={routeDefinitions.SIGN_IN}>
          <div className="signIn">
            <Typography type="attention" variant="bold">
              Sign In
            </Typography>
          </div>
        </Link>
        <div className="static-faq-header">
          <Typography size="header" type="attention">
            Help
          </Typography>
        </div>
        <div className="static-faq-body">
          <Input
            value={this.state.value}
            onChange={this.handleSearchChange}
            placeholder="What can we help you with?"
            icon={<Magnify />}
          />
          <div>{[1, 2, 3].map(renderStaticFAQ)}</div>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default StaticFAQ;
