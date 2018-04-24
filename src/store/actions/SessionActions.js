// @flow
import type { Dispatch } from 'redux';

import { doLogin, doLogout } from '../../helpers/Auth';

export const saveToken = (token: string) => ({
  type: 'session/signin',
  token,
});
export const removeToken = () => ({
  type: 'session/signout',
});

export const signIn = (email: string, password: string) => {
  return (dispatch: Dispatch) => {
    return doLogin(email, password)
      .then((token: string) => dispatch(saveToken(token)))
      .catch(e => Promise.reject(e));
  };
};

export const signOut = () => {
  return (dispatch: Dispatch) => {
    doLogout();
    return dispatch(removeToken());
  };
};
