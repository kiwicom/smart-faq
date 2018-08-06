// @flow

import * as React from 'react';
import { QueryRenderer as OriginalQueryRenderer } from 'react-relay';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';

import { withLoginToken } from '../context/User';
import { withLogout } from '../context/BookingState';
import { withLanguage } from '../context/Language';
import createEnvironment, { ERROR_FORBIDDEN } from './environment';
import frontendLanguageToLocale from '../helpers/frontendLanguageToLocale';
import type { onLogout } from '../types';

type RenderArgs<RenderProps> = {
  error: ?Error,
  props: ?RenderProps,
};

type Props<RenderProps> = {|
  cacheConfig?: {| force: boolean |},
  query: () => mixed,
  render: (RenderArgs<RenderProps>) => ?React$Element<*>,
  variables: { [string]: mixed },
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
class QueryRenderer<RenderProps> extends React.Component<
  ContextTypes & Props<RenderProps>,
> {
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
    const { loginToken, language } = this.props;
    const locale = frontendLanguageToLocale[language];
    return (
      <OriginalQueryRenderer
        {...this.props}
        render={this.renderContainer}
        environment={createEnvironment(loginToken, locale)}
      />
    );
  }
}

export default withRouter(
  withLogout(withLanguage(withLoginToken(QueryRenderer))),
);
