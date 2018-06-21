// @flow
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import setQueryString from 'set-query-string';

type Props = {
  children: React.Node,
};

class UrlSync extends React.Component<Props> {
  static getDerivedStateFromProps(prevProps) {
    setQueryString({
      help: prevProps.location.pathname,
    });
    return null;
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(UrlSync);
