// @flow

import * as React from 'react';
//import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';
import { SystemMessage, Typography } from '@kiwicom/orbit-components';
import { AlertCircle } from '@kiwicom/orbit-components/lib/icons';
import routeDefinitions from '../routeDefinitions';
import { BackButton, CloseIcon, Accordion, Box } from '../common';

const style = css`
  .UpcomingBooking {
    width: 480px;
    ////padding-top: 128px;
    padding: 40px;
    padding-top: 128px;
    background-color: #f5f7f9;
    height: 100%;
  }
  div.Screen-title {
    margin-bottom: 12px;
  }
  div.notification {
    //display: none;
    margin-bottom: 8px;
  }
  .outbound,
  .inbound {
    margin-top: 16px;
  }
  .outbound .title,
  .inbound .title {
    margin-bottom: 8px;
  }
  div.buttons {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
  button.manage-booking {
    font-weight: bold;
    font-size: 14px;
    width: 260px;
    height: 44px;
    padding: 12px 42px;
    border-radius: 3px;
    background-color: #e8edf1;
    border: none;
    color: #46515e;
  }
  span.main-title {
    margin-right: 8px;
  }
  div.title {
    margin-bottom: 2px;
  }
`;

type Props = {
  history: Object,
};

type State = {|
  email: string,
|};

class UpcomingBooking extends React.Component<Props, State> {
  state = {
    email: '',
  };

  handleChangeEmail = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handleSubmitEmail = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.history.push({
      pathname: routeDefinitions.CHECK_MAGIC_LINK,
      state: { email: this.state.email },
    });
  };
  renderOutbound = () => {
    return (
      <Box padding="12px 16px 16px 12px">
        <Accordion />
      </Box>
    );
  };
  renderInbound = () => {
    return (
      <Box padding="12px 16px 16px 12px">
        <Accordion />
      </Box>
    );
  };

  render() {
    return (
      <div className="UpcomingBooking">
        <BackButton text="Back" link={routeDefinitions.HOME} />
        <CloseIcon />
        <div className="Screen-title">
          <div className="title">
            <span className="main-title">
              <Typography size="header" type="attention">
                Upcoming booking
              </Typography>
            </span>
            <span className="second-title">
              <Typography size="small" type="active">
                select other booking
              </Typography>
            </span>
          </div>
          <div className="booking-id">
            <Typography type="secondary"># 265 784</Typography>
          </div>
        </div>
        <div className="notification">
          <SystemMessage type="info">
            You depart in 32 days. There is still time to add some nice extras
            or even change your booking.
          </SystemMessage>
        </div>
        <div className="outbound">
          <div className="title">
            <Typography size="large" type="attention">
              Outbound
            </Typography>
          </div>
          {this.renderOutbound()}
        </div>
        <div className="inbound">
          <div className="title">
            <Typography size="large" type="attention">
              Inbound
            </Typography>
          </div>
          {this.renderInbound()}
        </div>
        <div className="buttons">
          <button className="manage-booking">Manage my booking</button>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default UpcomingBooking;
