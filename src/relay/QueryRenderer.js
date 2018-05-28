// @flow

import * as React from 'react';
import { QueryRenderer as OriginalQueryRenderer } from 'react-relay';

import { withLoginToken, withLogout } from '../context/User';
import { withDefaultLanguage } from '../context/Language';
import createEnvironment, { ERROR_FORBIDDEN } from './environment';
import frontendLanguageToLocale from '../helpers/frontendLanguageToLocale';
import type { onLogout } from '../types';

type RenderProps = any;
type RenderArgs<RenderProps> = {
  error: ?Error,
  props: ?RenderProps,
};

type Props<RenderProps> = {|
  cacheConfig?: {| force: boolean |},
  query: () => mixed,
  render: (RenderArgs<RenderProps>) => ?React$Element<*>,
  variables: { [string]: mixed },
  logoutCallback?: () => void,
|};

type ContextTypes = {
  loginToken: ?string,
  defaultLanguage: string,
  onLogout: onLogout,
};
type RenderState<RenderProps> = {
  props: ?RenderProps,
  error: ?Error,
};
class QueryRenderer extends React.Component<ContextTypes & Props<RenderProps>> {
  renderContainer = (renderState: RenderState<RenderProps>) => {
    if (renderState.error) {
      if (renderState.error.message === ERROR_FORBIDDEN) {
        (async () => {
          await this.props.onLogout();
          this.props.logoutCallback && this.props.logoutCallback();
        })().catch(console.error);//eslint-disable-line
        return this.props.render({ error: null, props: null });
      }
    }
    return this.props.render(renderState);
  };
  render() {
    const { loginToken, defaultLanguage } = this.props;
    const locale = frontendLanguageToLocale[defaultLanguage];
    return (
      <OriginalQueryRenderer
        {...this.props}
        render={this.renderContainer}
        environment={createEnvironment(loginToken, locale)}
      />
    );
  }
}

export default withLogout(withDefaultLanguage(withLoginToken(QueryRenderer)));
