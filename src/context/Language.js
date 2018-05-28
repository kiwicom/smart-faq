// @flow

import * as React from 'react';

const defaultLanguage = 'en';

export const LanguageContext = React.createContext(defaultLanguage);

export const withLanguage = <Props>(
  Component: React.ComponentType<{ language: string } & Props>,
) =>
  function withLanguageHOC(props: Props) {
    return (
      <LanguageContext.Consumer>
        {(language: string) => <Component {...props} language={language} />}
      </LanguageContext.Consumer>
    );
  };
