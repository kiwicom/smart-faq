// @flow

import * as React from 'react';
import { QueryRenderer as OriginalQueryRenderer } from 'react-relay';

import { UserContext, type UserContextType } from '../context/User';
import { LanguageContext } from '../context/Language';
import createEnvironment from './environment';
import frontendLanguageToLocale from '../helpers/frontendLanguageToLocale';

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

const QueryRenderer = <RenderProps>(props: Props<RenderProps>) => (
  <UserContext.Consumer>
    {({ loginToken }: UserContextType) => (
      <LanguageContext.Consumer>
        {language => {
          const locale = frontendLanguageToLocale[language];

          return (
            <OriginalQueryRenderer
              {...props}
              environment={createEnvironment(loginToken, locale)}
            />
          );
        }}
      </LanguageContext.Consumer>
    )}
  </UserContext.Consumer>
);

export default QueryRenderer;
