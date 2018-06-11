// @flow

import * as React from "react";
import { Redirect } from "react-router-dom";
import UserStatus from "../helpers/UserStatus";

const Redirector = () => (
  <UserStatus.LoggedIn>
    <Redirect to="/faq/" />
  </UserStatus.LoggedIn>
);

const redirectsLoggedIn = (ComponentToWrap: React.ComponentType<any>) => {
  const WrappedComponent = (props: any) => (
    <React.Fragment>
      <Redirector />
      <ComponentToWrap {...props} />
    </React.Fragment>
  );
  return WrappedComponent;
};

export default redirectsLoggedIn;
