// @flow
import { SIGN_IN } from '../actions/SessionActions';

type State = {
  token: string,
};

type Action = {
  type: string,
  token: string,
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
    default:
      return state;
  }
}
