// @flow
import { combineReducers } from 'redux';

import sessionReducer from './SessionReducer';
import type { State as SessionState } from './SessionReducer';

export type StoreType = {
  session: SessionState,
};

const rootReducer = combineReducers({
  session: sessionReducer,
});

export default rootReducer;
