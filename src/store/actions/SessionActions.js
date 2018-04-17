// @flow
import { doLogin, doLogout } from '../../helpers/Auth';

export const SIGN_IN = 'session/signin';
export const SIGN_OUT = 'session/signout';

export const saveToken = (token: string) => ({
  type: SIGN_IN,
  token,
});
export const removeToken = () => ({
  type: SIGN_OUT,
});

export const signIn = (email: string, password: string) => {
  return (dispatch: Function) => {
    return doLogin(email, password).then((token: string) =>
      dispatch(saveToken(token)),
    );
  };
};

export const signOut = () => {
  return (dispatch: Function) => {
    doLogout();
    return dispatch(removeToken());
  };
};
