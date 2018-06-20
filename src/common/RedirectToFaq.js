// @flow

import * as React from 'react';
import { Redirect } from 'react-router-dom';

type Props = {
  children: React.Node,
  initialRoute?: string,
};

const Redirector = ({ initialRoute }: { initialRoute?: string }) => {
  if (initialRoute && initialRoute !== '/') {
    return (
      <React.Fragment>
        <Redirect to={initialRoute} />
      </React.Fragment>
    );
  }
  return null;
};

const RedirectToFAQ = (props: Props) => {
  return (
    <React.Fragment>
      <Redirector initialRoute={props.initialRoute} />
      {props.children}
    </React.Fragment>
  );
};

export default RedirectToFAQ;
