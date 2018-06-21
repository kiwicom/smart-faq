// @flow

import * as React from 'react';
import css from 'styled-jsx/css';
import { Switch, Route } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import Header from './Header';
import StaticFAQ from '../../StaticFAQ';
import FAQArticleDetail from '../../StaticFAQ/FAQArticleDetail';
import { ScrollableContent } from '../../common';
import { UserContext, type UserContextType } from '../../context/User';
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
`;

const FAQRoute = ({ history }: Props) => (
  <Switch location={history.location}>
    <Route exact path="/faq/:categoryId?" component={StaticFAQ} />
    <Route
      path="/faq/:categoryId/article/:articleId"
      component={FAQArticleDetail}
    />
  </Switch>
);

class ContentPage extends React.Component<Props> {
  renderPage = (isLoggedIn: boolean) => (
    <BookingState.Consumer>
      {({ bookingPage, selectedBooking }) => (
        <div className="ContentPage">
          <Header isLoggedIn={isLoggedIn} />
          <div className="Body">
            {bookingPage === 'ALL_BOOKINGS' ? (
              <div className="BookingInfo">
                <BookingPage
                  bookingPage={bookingPage}
                  selectedBooking={selectedBooking}
                />
              </div>
            ) : (
              <MediaQuery query="screen and (min-width: 1181px)">
                {isLoggedIn && (
                  <div className="BookingInfo">
                    <BookingPage
                      bookingPage={bookingPage}
                      selectedBooking={selectedBooking}
                    />
                  </div>
                )}
              </MediaQuery>
            )}
            <div className="FAQWrapper">
              <ScrollableContent>
                <div className="FAQ">
                  {bookingPage === 'ALL_BOOKINGS' ? (
                    <MediaQuery query="screen and (min-width: 1181px)">
                      <FAQRoute history={this.props.history} />
                    </MediaQuery>
                  ) : (
                    <FAQRoute history={this.props.history} />
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

  render() {
    return (
      <UserContext.Consumer>
        {({ user }: UserContextType) => this.renderPage(Boolean(user))}
      </UserContext.Consumer>
    );
  }
}

export default ContentPage;
