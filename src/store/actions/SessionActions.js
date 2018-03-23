// @flow
import { doLogin } from '../../helpers/Auth';

export const SIGN_IN = 'session/signin';

export const saveToken = (token: string) => ({
  type: SIGN_IN,
  token,
});

export const signIn = (email: string, password: string) => {
  return dispatch => {
    doLogin(email, password).then(token => dispatch(saveToken(token)));
  };
};
