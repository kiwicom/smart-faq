// @flow

import * as React from 'react';

const defaultLanguage = 'en';

// $FlowExpectedError: will be fixed with new flow releases
export const LanguageContext = React.createContext(defaultLanguage);
