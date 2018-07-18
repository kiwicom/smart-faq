// @flow

import * as React from 'react';
import EventListener from 'react-event-listener';
import { createMemoryHistory as createHistory } from 'history';
import { Router } from 'react-router';

type Props = {|
  route: string,
  children: React.Node,
|};

class QueryParamRouter extends React.Component<Props> {
  history: {
    push: string => void,
  };
  unlisten: () => void;

  constructor(props: Props) {
    super(props);

    const history = createHistory({
      initialEntries: [props.route],
      initialIndex: 0,
    });
    this.unlisten = history.listen(this.onHistoryChange);
    this.history = history;
  }

  componentDidMount() {
    this.updateUrlParam(this.props.route);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.route !== this.props.route) {
      this.history.push(this.props.route);
      this.updateUrlParam(this.props.route);
    }
  }

  componentWillUnmount() {
    this.unlisten();
  }

  updateUrlParam = (pathname: string) => {
    if (typeof window === 'undefined') {
      return;
    }

    const location = window.location;
    const params = new URLSearchParams(location.search);

    if (pathname === params.get('help')) {
      return;
    }

    params.set('help', pathname);

    window.history.pushState(
      {},
      null,
      `${location.pathname}?${params.toString()}`,
    );
  };

  onPopStateChange = () => {
    const location = window.location;
    const params = new URLSearchParams(location.search);
    this.history.push(params.get('help'));
  };

  onHistoryChange = (location: { pathname: string }) => {
    this.updateUrlParam(location.pathname);
  };

  render() {
    return (
      <React.Fragment>
        <EventListener target="window" onpopstate={this.onPopStateChange} />
        <Router history={this.history}>{this.props.children}</Router>
      </React.Fragment>
    );
  }
}

export default QueryParamRouter;
