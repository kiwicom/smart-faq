// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Switch, Route, withRouter } from 'react-router-dom';

import { Desktop } from '../Responsive';
import Header from './Header';
import StaticFAQ from '../../StaticFAQ';
import Article from '../../StaticFAQ/ArticleDetail/Article';
import { ScrollableContent } from '../../common';
import UserStatus from '../../helpers/UserStatus';
import { BookingState } from '../../context/BookingState';
import BookingPage from './BookingPage';

type Props = {|
  history: {
    location: string,
  },
|};

const styles = css`
  .ContentPage {
    min-width: 650px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .FAQWrapper {
    flex-grow: 1;
    position: relative;
  }
  .ContentPage .Body {
    display: flex;
    flex: 1;
    min-height: 0;
  }
  .FAQ {
    width: 650px;
    height: 100%;
  }
  .BookingInfo {
    width: 548px;
  }
  @media only screen and (max-width: 1180px) {
    .ContentPage {
      min-width: 320px;
      width: 100vw;
    }
    .ContentPage .Body {
      height: calc(100% - (123px));
    }
    .FAQ {
      width: 100%;
    }
    .BookingInfo {
      width: 100%;
    }
  }
  @media only screen and (max-width: 1180px) and (min-width: 900px) {
    .BookingInfo,
    .FAQWrapper {
      width: 50%;
    }
  }
`;

const FAQRoute = ({ history }: Props) => (
  <Switch location={history.location}>
    <Route exact path="/faq/:categoryId?" component={StaticFAQ} />
    <Route path="/faq/:categoryId/article/:articleId" component={Article} />
  </Switch>
);

const ContentPage = (props: Props) => (
  <BookingState.Consumer>
    {({ bookingPage, selectedBooking }) => (
      <div className="ContentPage">
        <Header />
        <div className="Body">
          {bookingPage === 'ALL_BOOKINGS' ? (
            <div className="BookingInfo">
              <BookingPage
                bookingPage={bookingPage}
                selectedBooking={selectedBooking}
              />
            </div>
          ) : (
            <Desktop>
              <UserStatus.LoggedIn>
                <div className="BookingInfo">
                  <BookingPage
                    bookingPage={bookingPage}
                    selectedBooking={selectedBooking}
                  />
                </div>
              </UserStatus.LoggedIn>
            </Desktop>
          )}
          <div className="FAQWrapper">
            <ScrollableContent>
              <div className="FAQ" id="SmartFAQ_Body">
                {bookingPage === 'ALL_BOOKINGS' ? (
                  <Desktop>
                    <FAQRoute history={props.history} />
                  </Desktop>
                ) : (
                  <FAQRoute history={props.history} />
                )}
              </div>
            </ScrollableContent>
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>
    )}
  </BookingState.Consumer>
);

export default withRouter(ContentPage);
