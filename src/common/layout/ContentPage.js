// @flow

import * as React from 'react';
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

class ContentPage extends React.Component<Props> {
  renderPage = (isLoggedIn: boolean) => (
    <div className="ContentPage">
      <Header isLoggedIn={isLoggedIn} />
      <div className="Body">
        <MediaQuery query="screen and (min-width: 1181px)">
          {isLoggedIn && (
            <div className="BookingInfo">
              <BookingState.Consumer>
                {({ bookingPage, selectedBooking }) => (
                  <BookingPage
                    bookingPage={bookingPage}
                    selectedBooking={selectedBooking}
                  />
                )}
              </BookingState.Consumer>
            </div>
          )}
        </MediaQuery>
        <div className="FAQWrapper">
          <ScrollableContent>
            <div className="FAQ">
              <Switch location={this.props.history.location}>
                <Route exact path="/faq/:categoryId?" component={StaticFAQ} />
                <Route
                  path="/faq/:categoryId/article/:articleId"
                  component={FAQArticleDetail}
                />
              </Switch>
            </div>
          </ScrollableContent>
        </div>
      </div>
      <style jsx>
        {`
          .ContentPage {
            min-width: 480px;
            height: 100vh;
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
            width: ${isLoggedIn ? '650px;' : '480px;'};
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
          }
        `}
      </style>
    </div>
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
