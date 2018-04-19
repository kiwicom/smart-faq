// @flow
import { doLogin, doLogout } from '../../helpers/Auth';

export const saveToken = (token: string) => ({
  type: 'session/signin',
  token,
});
export const removeToken = () => ({
  type: 'session/signout',
});

export const signIn = (email: string, password: string) => {
  return (dispatch: Function) => {
    return doLogin(email, password)
      .then((token: string) => dispatch(saveToken(token)))
      .catch(e => Promise.reject(e));
  };
};

export const signOut = () => {
  return (dispatch: Function) => {
    doLogout();
    return dispatch(removeToken());
  };
};
