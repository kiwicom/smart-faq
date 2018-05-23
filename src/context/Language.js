// @flow

import * as React from 'react';

const defaultLanguage = 'en';

export const LanguageContext = React.createContext(defaultLanguage);

export const withDefaultLanguage = <Props>(
  Component: React.ComponentType<{ defaultLanguage: string } & Props>,
) =>
  function withLanguageHOC(props: Props) {
    return (
      <LanguageContext.Consumer>
        {(defaultLanguage: string) => (
          <Component {...props} defaultLanguage={defaultLanguage} />
        )}
      </LanguageContext.Consumer>
    );
  };
