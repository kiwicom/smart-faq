// @flow

import * as React from 'react';
import { Redirect } from 'react-router-dom';

import UserStatus from '../helpers/UserStatus';

type Props = {
  children: React.Node,
  initialRoute?: string,
};

const Redirector = ({ initialRoute }: { initialRoute?: string }) => {
  // If there is initial route move to that route
  let redirect = '/faq/';
  if (initialRoute && initialRoute !== '/') {
    redirect = initialRoute;
  }

  return (
    <React.Fragment>
      <UserStatus.LoggedIn>
        <Redirect to={redirect} />
      </UserStatus.LoggedIn>

      <UserStatus.LoggedOut>
        {initialRoute && initialRoute !== '/' ? (
          <Redirect to={initialRoute} />
        ) : null}
      </UserStatus.LoggedOut>
    </React.Fragment>
  );
};

const RedirectsLoggedIn = (props: Props) => {
  return (
    <React.Fragment>
      <Redirector initialRoute={props.initialRoute} />
      {props.children}
    </React.Fragment>
  );
};

export default RedirectsLoggedIn;
