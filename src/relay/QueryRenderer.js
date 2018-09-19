// @flow

import * as React from 'react';
import {
  QueryRenderer as OriginalQueryRenderer,
  Environment,
} from 'react-relay';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';

import { withLoginToken } from '../context/User';
import { withLogout } from '../context/BookingState';
import { withLanguage } from '../context/Language';
import createEnvironment, { ERROR_FORBIDDEN } from './environment';
import type { onLogout } from '../types';

type RenderArgs<RenderProps> = {
  error: ?Error,
  props: ?RenderProps,
};

export type Props<RenderProps> = {|
  cacheConfig?: {| force: boolean |},
  query: () => mixed,
  render: (RenderArgs<RenderProps>) => ?React$Element<*>,
  variables?: { [string]: mixed },
|};

type ContextTypes = {
  loginToken: ?string,
  language: string,
  onLogout: onLogout,
  history: RouterHistory,
};

type RenderState<RenderProps> = {
  props: ?RenderProps,
  error: ?Error,
};

type State = {|
  locale: ?string,
  loginToken: ?string,
  environment: Environment,
|};

class QueryRenderer<RenderProps> extends React.Component<
  ContextTypes & Props<RenderProps>,
  State,
> {
  static getDerivedStateFromProps(nextProps, state) {
    const { loginToken, language } = nextProps;

    if (state.locale === language && state.loginToken === loginToken) {
      return null;
    }

    return {
      environment: createEnvironment(loginToken, language),
      locale: language,
      loginToken,
    };
  }

  constructor(props) {
    super(props);

    const { loginToken, language } = props;
    this.state = {
      environment: createEnvironment(loginToken, language), // eslint-disable-line react/no-unused-state
      loginToken, // eslint-disable-line react/no-unused-state
      locale: language, // eslint-disable-line react/no-unused-state
    };
  }

  renderContainer = (renderState: RenderState<RenderProps>) => {
    if (renderState.error) {
      if (renderState.error.message === ERROR_FORBIDDEN) {
        (async () => {
          await this.props.onLogout();
          this.props.history.push({
            pathname: '/sign-in',
            state: { sessionExpired: true },
          });
        })().catch(console.error); //eslint-disable-line no-console

        return this.props.render({ error: null, props: null });
      }
    }
    return this.props.render(renderState);
  };
  render() {
    const { loginToken, language, query, variables, cacheConfig } = this.props;

    return (
      <OriginalQueryRenderer
        query={query}
        variables={variables}
        cacheConfig={cacheConfig}
        render={this.renderContainer}
        environment={createEnvironment(loginToken, language)}
      />
    );
  }
}

export default withRouter(
  withLogout(withLanguage(withLoginToken(QueryRenderer))),
);
