// @flow

export type State = {
  token: string,
};

type Action =
  | {| type: 'session/signin', token: string |}
  | {| type: 'session/signout' |};

const initialState = {
  token: '',
};

export default function sessionReducer(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case 'session/signin':
      return { ...state, token: action.token };
    case 'session/signout':
      return { ...state, token: '' };
    default:
      return state;
  }
}
