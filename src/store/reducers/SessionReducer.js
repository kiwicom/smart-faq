// @flow
import { SIGN_OUT, SIGN_IN } from '../actions/SessionActions';

export type State = {
  token: string,
};

type Action = {
  type: string,
  token?: string,
};

const initialState = {
  token: '',
};

export default function sessionReducer(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, token: action.token };
    case SIGN_OUT:
      return { ...state, token: '' };
    default:
      return state;
  }
}
